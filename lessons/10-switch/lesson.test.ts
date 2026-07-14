import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 10 — Switch", () => {
  it('greet-in[//;en;//] prints "Hello"', () => {
    expect(probe(source, "greet-in[//;en;//]")[0]).toBe("Hello");
  });

  it('greet-in[//;ja;//] prints "Konnichiwa"', () => {
    expect(
      probe(source, "greet-in[//;ja;//]")[0],
      "case //;ja;// then console.log[//;Konnichiwa;//] を追加しましょう / Add the ja case",
    ).toBe("Konnichiwa");
  });

  it('greet-in[//;fr;//] prints "Unknown language" (blank)', () => {
    expect(
      probe(source, "greet-in[//;fr;//]")[0],
      "case blank でワイルドカードを追加しましょう / Add a wildcard with case blank",
    ).toBe("Unknown language");
  });
});
