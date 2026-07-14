import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 02 — Variables", () => {
  it('language is "Purus" / language が "Purus" になっている', () => {
    expect(
      probe(source, "console.log[language]")[0],
      "const language be //;Purus;// と宣言しましょう / Declare language with the value Purus",
    ).toBe("Purus");
  });

  it("count is 10 after `add be` / `add be` で count が 10 になっている", () => {
    expect(
      probe(source, "console.log[count]")[0],
      "count add be 10 で 10 を足しましょう / Add 10 with: count add be 10",
    ).toBe("10");
  });
});
