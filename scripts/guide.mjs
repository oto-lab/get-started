#!/usr/bin/env node
// Guided watch mode, rustlings-style.
//
// Finds the first incomplete lesson in exercises/, runs its tests, and
// watches its files. Save main.purus to re-check; when the tests pass,
// the guide automatically advances to the next lesson.
//
// Usage: npm run guide   (Ctrl+C to quit)

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, watch } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "exercises");
const vitestBin = join(root, "node_modules", "vitest", "vitest.mjs");

if (!existsSync(outDir)) {
  console.error("exercises/ がありません。まず npm start を実行してください。");
  console.error("exercises/ not found. Run npm start first.");
  process.exit(1);
}

const lang = existsSync(join(outDir, ".lang"))
  ? readFileSync(join(outDir, ".lang"), "utf8").trim()
  : "en";
const ja = lang === "ja";

const lessons = readdirSync(outDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

function runLesson(lesson) {
  const result = spawnSync(process.execPath, [vitestBin, "run", lesson], {
    cwd: root,
    stdio: "inherit",
  });
  return result.status === 0;
}

/** Quietly run everything once to find the first incomplete lesson. */
function findFirstIncomplete() {
  const reportFile = join(tmpdir(), `purus-get-started-guide-${Date.now()}.json`);
  spawnSync(
    process.execPath,
    [vitestBin, "run", "--reporter=json", `--outputFile=${reportFile}`],
    { cwd: root, stdio: "ignore" },
  );
  if (!existsSync(reportFile)) return 0;
  const report = JSON.parse(readFileSync(reportFile, "utf8"));
  rmSync(reportFile, { force: true });

  const passed = new Set();
  for (const result of report.testResults ?? []) {
    if (result.status !== "passed") continue;
    const resultPath = result.name.replaceAll("\\", "/");
    const lesson = lessons.find((name) => resultPath.includes(`/${name}/`));
    if (lesson) passed.add(lesson);
  }
  const index = lessons.findIndex((name) => !passed.has(name));
  return index === -1 ? lessons.length : index;
}

function waitForChange(dir) {
  return new Promise((resolve) => {
    const watcher = watch(dir, () => {
      // Debounce: editors often fire several events per save.
      setTimeout(() => {
        watcher.close();
        resolve();
      }, 300);
    });
  });
}

function banner(index) {
  const lesson = lessons[index];
  console.clear();
  console.log("─".repeat(60));
  console.log(
    ja
      ? `📘 レッスン ${index + 1}/${lessons.length} — ${lesson}`
      : `📘 Lesson ${index + 1}/${lessons.length} — ${lesson}`,
  );
  console.log("─".repeat(60));
  console.log("");
}

function celebrate() {
  console.log("");
  console.log("🎉".repeat(20));
  if (ja) {
    console.log("全レッスン完了です！おめでとうございます！");
    console.log("");
    console.log("次のステップ:");
    console.log("  - https://purus.work — ドキュメントを読む");
    console.log("  - https://playground.purus.work — ブラウザで試す");
    console.log("  - npx purus init my-project — 実際に何か作る");
  } else {
    console.log("All lessons complete. Congratulations!");
    console.log("");
    console.log("Next steps:");
    console.log("  - https://purus.work — read the docs");
    console.log("  - https://playground.purus.work — try it in the browser");
    console.log("  - npx purus init my-project — build something real");
  }
  console.log("🎉".repeat(20));
}

console.log(ja ? "進捗を確認しています…" : "Checking your progress…");
let index = findFirstIncomplete();

while (index < lessons.length) {
  const lesson = lessons[index];
  banner(index);

  if (runLesson(lesson)) {
    console.log("");
    console.log(
      ja ? `✅ ${lesson} クリア！次のレッスンへ進みます…` : `✅ ${lesson} complete! Moving on…`,
    );
    index++;
    if (index < lessons.length) {
      await new Promise((r) => setTimeout(r, 1200));
    }
    continue;
  }

  console.log("");
  console.log(
    ja
      ? `📖 説明: exercises/${lesson}/README.md`
      : `📖 Instructions: exercises/${lesson}/README.md`,
  );
  console.log(
    ja
      ? `✏  exercises/${lesson}/main.purus を編集して保存すると再チェックします (Ctrl+C で終了)`
      : `✏  Edit and save exercises/${lesson}/main.purus to re-check (Ctrl+C to quit)`,
  );
  await waitForChange(join(outDir, lesson));
}

celebrate();
