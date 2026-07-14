import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 10 — Switch", () => {
  it('greet-in[//;en;//] prints "Hello" / en で "Hello" と出力する', () => {
    expect(
      probe(source, "greet-in[//;en;//]")[0],
      "case //;en;// は最初から書かれています。消していませんか？ / The en case is given — did it get deleted?",
    ).toBe("Hello");
  });

  it('greet-in[//;ja;//] prints "Konnichiwa" / ja で "Konnichiwa" と出力する', () => {
    expect(
      probe(source, "greet-in[//;ja;//]")[0],
      "case //;ja;// then console.log[//;Konnichiwa;//] を追加しましょう / Add the ja case",
    ).toBe("Konnichiwa");
  });

  it('greet-in[//;fr;//] prints "Unknown language" / それ以外は "Unknown language" と出力する', () => {
    expect(
      probe(source, "greet-in[//;fr;//]")[0],
      "case blank でワイルドカードを追加しましょう / Add a wildcard with case blank",
    ).toBe("Unknown language");
  });
});
