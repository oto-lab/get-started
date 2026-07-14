#!/usr/bin/env node
// Interactive setup for the Purus get-started tutorial.
//
// Copies lesson templates from lessons/ into exercises/ using the
// language the learner picks. Learners edit the copies in exercises/,
// so lessons/ stays pristine for development and forks.
//
// Usage:
//   npm start                 (interactive)
//   npm start -- en           (skip the prompt)
//   npm start -- ja --force   (overwrite exercises/ without asking)

import { createInterface } from "node:readline/promises";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const lessonsDir = join(root, "lessons");
const outDir = join(root, "exercises");

const args = process.argv.slice(2);
const langArg = args.find((a) => a === "en" || a === "ja");
const force = args.includes("--force") || args.includes("-f");

const rl =
  process.stdin.isTTY && (!langArg || existsSync(outDir))
    ? createInterface({ input: process.stdin, output: process.stdout })
    : null;

async function chooseLanguage() {
  if (langArg) return langArg;
  if (!rl) {
    console.error("No TTY. Pass a language: npm start -- en | ja");
    process.exit(1);
  }
  console.log("Which language do you want to learn in?");
  console.log("どちらの言語で学習しますか？");
  console.log("");
  console.log("  1) English");
  console.log("  2) 日本語");
  console.log("");
  for (;;) {
    const answer = (await rl.question("> ")).trim().toLowerCase();
    if (answer === "1" || answer === "en" || answer === "english") return "en";
    if (answer === "2" || answer === "ja" || answer === "日本語") return "ja";
    console.log("1 か 2 を入力してください / Please enter 1 or 2");
  }
}

async function confirmOverwrite(lang) {
  if (!existsSync(outDir)) return true;
  if (force) return true;
  if (!rl) {
    console.error(
      lang === "ja"
        ? "exercises/ が既に存在します。上書きするには --force を付けてください。"
        : "exercises/ already exists. Pass --force to overwrite.",
    );
    process.exit(1);
  }
  console.log("");
  console.log(
    lang === "ja"
      ? "⚠  exercises/ が既に存在します。上書きすると編集内容は失われます。"
      : "⚠  exercises/ already exists. Overwriting will discard your edits.",
  );
  const answer = (
    await rl.question(lang === "ja" ? "上書きしますか？ (y/N) > " : "Overwrite? (y/N) > ")
  )
    .trim()
    .toLowerCase();
  return answer === "y" || answer === "yes";
}

function localizeReadme(markdown, lang) {
  // Drop the language-switch link (its target is not copied).
  let result = markdown
    .split("\n")
    .filter((line) => !/^\[(English|日本語)\]\(\.\/README(-ja)?\.md\)\s*$/.test(line))
    .join("\n");
  // Japanese READMEs link to README-ja.md, which is renamed to README.md in copies.
  if (lang === "ja") result = result.replaceAll("README-ja.md", "README.md");
  return result;
}

const lang = await chooseLanguage();
const proceed = await confirmOverwrite(lang);
rl?.close();

if (!proceed) {
  console.log(lang === "ja" ? "中止しました。" : "Aborted.");
  process.exit(0);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, ".lang"), lang);
copyFileSync(join(lessonsDir, "helper.ts"), join(outDir, "helper.ts"));

const lessonNames = readdirSync(lessonsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

for (const name of lessonNames) {
  const src = join(lessonsDir, name);
  const dst = join(outDir, name);
  mkdirSync(dst);

  copyFileSync(join(src, `main.${lang}.purus`), join(dst, "main.purus"));
  copyFileSync(join(src, "lesson.test.ts"), join(dst, "lesson.test.ts"));

  const readmeSrc = lang === "ja" ? "README-ja.md" : "README.md";
  const readme = localizeReadme(readFileSync(join(src, readmeSrc), "utf8"), lang);
  writeFileSync(join(dst, "README.md"), readme);
}

console.log("");
if (lang === "ja") {
  console.log(`✅ ${lessonNames.length} レッスンを exercises/ に用意しました！`);
  console.log("");
  console.log("おすすめ: npm run guide （ガイドが自動で進行を管理します）");
  console.log("");
  console.log("手動で進める場合:");
  console.log("  1. exercises/01-hello-world/README.md を読む");
  console.log("  2. 同じフォルダの main.purus を編集する");
  console.log("  3. npm test 01 で答え合わせ（npm run test:watch 01 で自動実行）");
  console.log("");
  console.log("進捗の確認: npm run progress");
  console.log("詰まったら lessons/01-hello-world/solution.purus を見てもOKです。");
} else {
  console.log(`✅ Copied ${lessonNames.length} lessons into exercises/`);
  console.log("");
  console.log("Recommended: npm run guide  (the guide manages your progress)");
  console.log("");
  console.log("Or go manual:");
  console.log("  1. Read exercises/01-hello-world/README.md");
  console.log("  2. Edit main.purus in the same folder");
  console.log("  3. Check with: npm test 01  (or npm run test:watch 01)");
  console.log("");
  console.log("See your progress: npm run progress");
  console.log("Stuck? Peek at lessons/01-hello-world/solution.purus.");
}
