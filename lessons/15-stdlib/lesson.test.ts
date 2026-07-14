import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 15 — Standard Library", () => {
  it("rounded is 4 / rounded が 4 になる", () => {
    expect(
      probe(source, "console.log[rounded]")[0],
      "m.round[3.7] と書きましょう / Round with: m.round[3.7]",
    ).toBe("4");
  });

  it("biggest is 4 / biggest が 4 になる", () => {
    expect(
      probe(source, "console.log[biggest]")[0],
      "m.max[3; 1; 4] と書きましょう（引数は ; 区切り） / Use m.max[3; 1; 4] — arguments separated by ;",
    ).toBe("4");
  });

  it("total is 6 / total が 6 になる", () => {
    expect(
      probe(source, "console.log[total]")[0],
      "arr.sum[[1, 2, 3]] と書きましょう（配列全体が 1 つの引数） / Use arr.sum[[1, 2, 3]] — the array is one argument",
    ).toBe("6");
  });
});
