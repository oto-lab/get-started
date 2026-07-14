import { describe, expect, it } from "vitest";
import { readLesson, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 01 — Hello, World", () => {
  it('prints "Hello, Purus!" / "Hello, Purus!" と出力する', () => {
    const { stdout } = run(source);
    expect(
      stdout[0],
      "console.log[//;Hello, Purus!;//] と書いてみましょう / Print the exact text with console.log",
    ).toBe("Hello, Purus!");
  });
});
