import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 08 — Arrays", () => {
  it("first is 10 (numbers[\\0])", () => {
    expect(
      probe(source, "console.log[first]")[0],
      "numbers[\\0] で最初の要素を取り出しましょう / Access the first element with numbers[\\0]",
    ).toBe("10");
  });

  it("digits is [0, 1, 2, 3, 4] (range literal)", () => {
    expect(
      probe(source, "console.log[digits.join[//;,;//]]")[0],
      "[0..4] で範囲リテラルを作りましょう / Build the range with [0..4]",
    ).toBe("0,1,2,3,4");
  });

  it('first-color is "red" (destructuring)', () => {
    expect(
      probe(source, "console.log[first-color]")[0],
      "const [first-color; second-color] be colors",
    ).toBe("red");
  });

  it('second-color is "blue" (destructuring)', () => {
    expect(
      probe(source, "console.log[second-color]")[0],
      "const [first-color; second-color] be colors",
    ).toBe("blue");
  });
});
