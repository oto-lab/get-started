import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 06 — Conditionals", () => {
  it('sign[5] is "positive" / sign[5] が "positive" になる', () => {
    expect(
      probe(source, "console.log[sign[5]]")[0],
      "if x gt 0 のとき positive を返しましょう / Return positive when x gt 0",
    ).toBe("positive");
  });

  it('sign[0] is "zero" / sign[0] が "zero" になる', () => {
    expect(
      probe(source, "console.log[sign[0]]")[0],
      "elif x eq 0 のとき zero を返しましょう / Return zero when x eq 0",
    ).toBe("zero");
  });

  it('sign[-3] is "negative" / sign[-3] が "negative" になる', () => {
    expect(
      probe(source, "console.log[sign[-3]]")[0],
      "else のとき negative を返しましょう / Return negative otherwise",
    ).toBe("negative");
  });
});
