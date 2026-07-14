import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 13 — Error Handling", () => {
  it("try-divide[10; 2] is 5 / 正常時は割り算の結果を返す", () => {
    expect(probe(source, "console.log[try-divide[10; 2]]")[0]).toBe("5");
  });

  it('try-divide[10; 0] is "error: division by zero" / 0 除算はエラーメッセージを返す', () => {
    expect(
      probe(source, "console.log[try-divide[10; 0]]")[0],
      "throw と try/catch を組み合わせましょう / Combine throw with try/catch",
    ).toBe("error: division by zero");
  });

  it("safe-divide[10; 0] throws / safe-divide は 0 除算で throw する", () => {
    expect(
      () => probe(source, "safe-divide[10; 0]"),
      "b eq 0 のとき throw new Error[...] しましょう / Throw when b eq 0",
    ).toThrow(/division by zero/);
  });
});
