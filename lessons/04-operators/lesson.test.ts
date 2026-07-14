import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 04 — Operators", () => {
  it("sum is 10 / sum が 10 になる", () => {
    expect(
      probe(source, "console.log[sum]")[0],
      "a add b で和を計算しましょう / Compute the sum with: a add b",
    ).toBe("10");
  });

  it("difference is 4 / difference が 4 になる", () => {
    expect(
      probe(source, "console.log[difference]")[0],
      "a sub b で差を計算しましょう / Compute the difference with: a sub b",
    ).toBe("4");
  });

  it("product is 21 / product が 21 になる", () => {
    expect(
      probe(source, "console.log[product]")[0],
      "a mul b で積を計算しましょう / Compute the product with: a mul b",
    ).toBe("21");
  });

  it("remainder is 1 / remainder が 1 になる", () => {
    expect(
      probe(source, "console.log[remainder]")[0],
      "a mod b で余りを計算しましょう / Compute the remainder with: a mod b",
    ).toBe("1");
  });

  it("power is 343 / power が 343 になる", () => {
    expect(
      probe(source, "console.log[power]")[0],
      "a pow b でべき乗を計算しましょう / Compute the power with: a pow b",
    ).toBe("343");
  });
});
