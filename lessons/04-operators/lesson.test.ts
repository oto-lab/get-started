import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 04 — Operators", () => {
  it("sum is 10 (a add b)", () => {
    expect(probe(source, "console.log[sum]")[0], "a add b").toBe("10");
  });

  it("difference is 4 (a sub b)", () => {
    expect(probe(source, "console.log[difference]")[0], "a sub b").toBe("4");
  });

  it("product is 21 (a mul b)", () => {
    expect(probe(source, "console.log[product]")[0], "a mul b").toBe("21");
  });

  it("remainder is 1 (a mod b)", () => {
    expect(probe(source, "console.log[remainder]")[0], "a mod b").toBe("1");
  });

  it("power is 343 (a pow b)", () => {
    expect(probe(source, "console.log[power]")[0], "a pow b").toBe("343");
  });
});
