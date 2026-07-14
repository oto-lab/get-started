import { compile } from "purus";
import vm from "node:vm";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export interface RunResult {
  stdout: string[];
  stderr: string[];
}

/**
 * Read the lesson source next to the calling test file.
 * Reads `main.purus` normally, or `solution.purus` when
 * vitest runs with `--mode solutions`.
 */
export function readLesson(importMetaUrl: string): string {
  const dir = dirname(fileURLToPath(importMetaUrl));
  const file = import.meta.env.MODE === "solutions" ? "solution.purus" : "main.purus";
  return readFileSync(join(dir, file), "utf8");
}

/**
 * Compile Purus source to JavaScript and run it in a sandbox,
 * capturing console output line by line.
 */
export function run(source: string): RunResult {
  let js: string;
  try {
    js = compile(source, { header: false });
  } catch (e) {
    throw new Error(
      "Purus コードのコンパイルに失敗しました / Failed to compile your Purus code:\n" +
        (e instanceof Error ? e.message : String(e)),
    );
  }

  const stdout: string[] = [];
  const stderr: string[] = [];
  const context = vm.createContext({
    console: {
      log: (...args: unknown[]) => stdout.push(args.map(String).join(" ")),
      info: (...args: unknown[]) => stdout.push(args.map(String).join(" ")),
      error: (...args: unknown[]) => stderr.push(args.map(String).join(" ")),
      warn: (...args: unknown[]) => stderr.push(args.map(String).join(" ")),
    },
    Math,
    JSON,
    Date,
    String,
    Number,
    Boolean,
    Array,
    Object,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
  });

  try {
    new vm.Script(js).runInContext(context, { timeout: 3000 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes("timed out")) {
      throw new Error(
        "実行がタイムアウトしました。無限ループになっていませんか？ / " +
          "Execution timed out. Do you have an infinite loop?",
      );
    }
    throw new Error("実行中にエラーが発生しました / Runtime error:\n" + msg);
  }

  return { stdout, stderr };
}

/**
 * Run the lesson code with an extra Purus snippet appended,
 * returning only the output lines produced by the snippet.
 * Used to inspect the learner's variables and functions.
 */
export function probe(source: string, snippet: string): string[] {
  const baseCount = run(source).stdout.length;
  return run(`${source}\n${snippet}\n`).stdout.slice(baseCount);
}

/**
 * Like run(), but waits for pending promises (microtasks and one
 * macrotask tick) to settle before returning. Use for async lessons.
 */
export async function runAsync(source: string): Promise<RunResult> {
  const result = run(source);
  await new Promise((resolve) => setImmediate(resolve));
  await new Promise((resolve) => setImmediate(resolve));
  return result;
}

/**
 * Async variant of probe() for lessons whose probe snippet resolves
 * promises (e.g. an async wrapper function that awaits and logs).
 */
export async function probeAsync(source: string, snippet: string): Promise<string[]> {
  const baseCount = (await runAsync(source)).stdout.length;
  return (await runAsync(`${source}\n${snippet}\n`)).stdout.slice(baseCount);
}
