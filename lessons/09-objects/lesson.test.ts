import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 09 — Objects", () => {
  it('cat.name is "Tama" / cat.name が "Tama" になる', () => {
    expect(
      probe(source, "console.log[cat.name]")[0],
      "[name be //;Tama;//, age be 3] のように書きましょう / Write the object literal with name and age",
    ).toBe("Tama");
  });

  it("cat.age is 3 / cat.age が 3 になる", () => {
    expect(
      probe(source, "console.log[cat.age]")[0],
      "age be 3 のプロパティも忘れずに / Don't forget the age be 3 property",
    ).toBe("3");
  });

  it('prints "Tama is 3 years old" / "Tama is 3 years old" と出力される', () => {
    expect(
      run(source).stdout[0],
      "cat が正しければ分割代入と補間がそのまま動きます / Once cat is correct, the destructuring and interpolation below just work",
    ).toBe("Tama is 3 years old");
  });
});
