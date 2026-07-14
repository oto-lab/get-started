import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 09 — Objects", () => {
  it('cat.name is "Tama"', () => {
    expect(
      probe(source, "console.log[cat.name]")[0],
      "[name be //;Tama;//, age be 3] のように書きましょう / Write the object literal with name and age",
    ).toBe("Tama");
  });

  it("cat.age is 3", () => {
    expect(probe(source, "console.log[cat.age]")[0]).toBe("3");
  });

  it('prints "Tama is 3 years old" / 分割代入した値で出力される', () => {
    expect(run(source).stdout[0]).toBe("Tama is 3 years old");
  });
});
