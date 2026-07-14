import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 15 — Standard Library", () => {
  it("rounded is 4 (m.round[3.7])", () => {
    expect(
      probe(source, "console.log[rounded]")[0],
      "m.round[3.7] と書きましょう / Use m.round",
    ).toBe("4");
  });

  it("biggest is 4 (m.max[3; 1; 4])", () => {
    expect(
      probe(source, "console.log[biggest]")[0],
      "m.max[3; 1; 4] と書きましょう / Use m.max",
    ).toBe("4");
  });

  it("total is 6 (arr.sum[[1, 2, 3]])", () => {
    expect(
      probe(source, "console.log[total]")[0],
      "arr.sum[[1, 2, 3]] と書きましょう / Use arr.sum",
    ).toBe("6");
  });
});
