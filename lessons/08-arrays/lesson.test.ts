import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 08 — Arrays", () => {
  it("first is 10 / first が 10 になる", () => {
    expect(
      probe(source, "console.log[first]")[0],
      "numbers[\\0] で最初の要素を取り出しましょう / Access the first element with numbers[\\0]",
    ).toBe("10");
  });

  it("digits is [0, 1, 2, 3, 4] / digits が [0, 1, 2, 3, 4] になる", () => {
    expect(
      probe(source, "console.log[digits.join[//;,;//]]")[0],
      "[0..4] で範囲リテラルを作りましょう / Build the range with [0..4]",
    ).toBe("0,1,2,3,4");
  });

  it('first-color is "red" / first-color が "red" になる', () => {
    expect(
      probe(source, "console.log[first-color]")[0],
      "const [first-color; second-color] be colors と 1 行で書きましょう / Destructure with one line: const [first-color; second-color] be colors",
    ).toBe("red");
  });

  it('second-color is "blue" / second-color が "blue" になる', () => {
    expect(
      probe(source, "console.log[second-color]")[0],
      "分割代入で 2 つ目の要素も取り出せます / Destructuring also extracts the second element",
    ).toBe("blue");
  });
});
