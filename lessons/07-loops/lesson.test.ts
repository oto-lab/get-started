import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 07 — Loops", () => {
  it("sum-up[10] is 55", () => {
    expect(
      probe(source, "console.log[sum-up[10]]")[0],
      "while で 1..n を足し合わせましょう / Sum 1..n with a while loop",
    ).toBe("55");
  });

  it("sum-up[1] is 1", () => {
    expect(probe(source, "console.log[sum-up[1]]")[0]).toBe("1");
  });

  it("sum-up[100] is 5050", () => {
    expect(probe(source, "console.log[sum-up[100]]")[0]).toBe("5050");
  });

  it("prints each fruit / fruits を 1 行ずつ出力する", () => {
    expect(
      run(source).stdout,
      "for fruit in fruits で console.log[fruit] しましょう / Print each fruit with for-in",
    ).toEqual(["apple", "banana", "cherry"]);
  });
});
