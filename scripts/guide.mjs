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

/**
 * Run one lesson's tests with live output, and also collect the
 * failures via the JSON reporter so they can be re-printed at the
 * end (the live output scrolls away too fast to read).
 */
function runLesson(lesson) {
  const reportFile = join(tmpdir(), `purus-get-started-guide-run-${Date.now()}.json`);
  const result = spawnSync(
    process.execPath,
    [
      vitestBin,
      "run",
      lesson,
      "--reporter=default",
      "--reporter=json",
      `--outputFile=${reportFile}`,
    ],
    {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, FORCE_COLOR: "1" },
    },
  );
  const passed = result.status === 0;

  // Relay the live output, minus the JSON-reporter noise line.
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`
    .split("\n")
    .filter((line) => !line.includes("JSON report written to"))
    .join("\n");
  process.stdout.write(output);

  const failures = [];
  if (!passed && existsSync(reportFile)) {
    try {
      const report = JSON.parse(readFileSync(reportFile, "utf8"));
      for (const file of report.testResults ?? []) {
        for (const assertion of file.assertionResults ?? []) {
          if (assertion.status !== "failed") continue;
          const raw = String(assertion.failureMessages?.[0] ?? "");
          const message = raw
            .replace(/\u001b\[[0-9;]*m/g, "") // strip ANSI colors
            .split("\n")
            .filter((line) => {
              const t = line.trim();
              return t && !t.startsWith("at ") && !t.startsWith("❯");
            })
            .slice(0, 6)
            .join("\n      ");
          failures.push({ title: assertion.title, message });
        }
      }
    } catch {
      // JSON parse failed — the live output above still has the details
    }
  }
  rmSync(reportFile, { force: true });
  return { passed, failures };
}

function printFailures(failures) {
  if (failures.length === 0) return;
  console.log("");
  console.log("─".repeat(60));
  console.log(
    ja ? `❌ 失敗したテスト（${failures.length} 件）:` : `❌ Failed tests (${failures.length}):`,
  );
  for (const failure of failures) {
    console.log("");
    console.log(`  × ${failure.title}`);
    if (failure.message) console.log(`      ${failure.message}`);
  }
  console.log("─".repeat(60));
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

  const { passed, failures } = runLesson(lesson);
  if (passed) {
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

  printFailures(failures);

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
