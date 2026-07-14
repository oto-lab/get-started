#!/usr/bin/env node
// Show tutorial progress, rustlings-style: runs the tests for every
// lesson in exercises/ and prints a ✅ / ⬜ summary.
//
// Usage: npm run progress

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "exercises");

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

// Run all lesson tests once with the JSON reporter.
const reportFile = join(tmpdir(), `purus-get-started-progress-${Date.now()}.json`);
spawnSync(
  process.execPath,
  [
    join(root, "node_modules", "vitest", "vitest.mjs"),
    "run",
    "--reporter=json",
    `--outputFile=${reportFile}`,
  ],
  { cwd: root, stdio: "ignore" },
);

if (!existsSync(reportFile)) {
  console.error(
    ja
      ? "テスト結果を取得できませんでした。npm test で直接確認してください。"
      : "Could not collect test results. Try running npm test directly.",
  );
  process.exit(1);
}

const report = JSON.parse(readFileSync(reportFile, "utf8"));
rmSync(reportFile, { force: true });

const byLesson = new Map();
for (const result of report.testResults ?? []) {
  const resultPath = result.name.replaceAll("\\", "/");
  const lesson = lessons.find((name) => resultPath.includes(`/${name}/`));
  if (!lesson) continue;
  const total = result.assertionResults.length;
  const passed = result.assertionResults.filter((a) => a.status === "passed").length;
  byLesson.set(lesson, { passed, total, ok: result.status === "passed" });
}

console.log("");
console.log(ja ? "Purus をはじめよう — 進捗" : "Get Started with Purus — Progress");
console.log("");

let completed = 0;
let next = null;
for (const lesson of lessons) {
  const r = byLesson.get(lesson);
  if (r?.ok) {
    completed++;
    console.log(`  ✅ ${lesson}`);
  } else {
    next ??= lesson;
    const detail = r ? ` (${r.passed}/${r.total})` : "";
    console.log(`  ⬜ ${lesson}${detail}`);
  }
}

console.log("");
if (completed === lessons.length) {
  console.log(
    ja
      ? `🎉 全 ${lessons.length} レッスン完了です！おめでとうございます！`
      : `🎉 All ${lessons.length} lessons complete. Congratulations!`,
  );
  console.log(
    ja
      ? "次は https://purus.work のドキュメントや https://playground.purus.work を試してみましょう。"
      : "Next: explore the docs at https://purus.work or try https://playground.purus.work",
  );
} else {
  console.log(
    ja
      ? `${completed}/${lessons.length} レッスン完了`
      : `${completed}/${lessons.length} lessons complete`,
  );
  const num = next.slice(0, 2);
  console.log(
    ja
      ? `次のレッスン: exercises/${next}/README.md （npm test ${num} で確認）`
      : `Next lesson: exercises/${next}/README.md (check with: npm test ${num})`,
  );
}
console.log("");
