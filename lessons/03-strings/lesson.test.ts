import { describe, expect, it } from "vitest";
import { readLesson, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 03 — Strings", () => {
  it('greeting is "Hello, World!" / greeting が "Hello, World!" になる', () => {
    const { stdout } = run(source);
    expect(
      stdout[0],
      "//;Hello, [name]!;// のように補間を使いましょう / Use interpolation like //;Hello, [name]!;//",
    ).toBe("Hello, World!");
  });

  it("uses [name] interpolation / [name] の補間を使っている", () => {
    const greetingLine = source
      .split("\n")
      .find((line) => line.includes("const greeting")) ?? "";
    expect(
      greetingLine.includes("[name]"),
      "文字列を直接書くのではなく [name] を埋め込みましょう / Embed [name] instead of hard-coding the text",
    ).toBe(true);
  });
});
