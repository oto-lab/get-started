import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 05 — Functions", () => {
  it("double[21] returns 42", () => {
    expect(
      probe(source, "console.log[double[21]]")[0],
      "fn double x to return x mul 2",
    ).toBe("42");
  });

  it("double[5] returns 10", () => {
    expect(probe(source, "console.log[double[5]]")[0]).toBe("10");
  });

  it("add-nums[2; 3] returns 5", () => {
    expect(
      probe(source, "console.log[add-nums[2; 3]]")[0],
      "return a add b と書きましょう / Return a add b",
    ).toBe("5");
  });

  it("add-nums[10; -4] returns 6", () => {
    expect(probe(source, "console.log[add-nums[10; -4]]")[0]).toBe("6");
  });
});
