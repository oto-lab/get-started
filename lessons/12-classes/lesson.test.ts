import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 12 — Classes", () => {
  it("counter starts at 10 / counter の初期値は 10", () => {
    expect(probe(source, "console.log[counter.value]")[0]).toBe("10");
  });

  it("increment[] adds 1 / increment で 1 増える", () => {
    expect(
      probe(source, "counter.increment[]\ncounter.increment[]\nconsole.log[counter.value]")[0],
      "fn increment メソッドを追加しましょう / Add an increment method",
    ).toBe("12");
  });

  it('describe[] returns "Count: 10" / describe が "Count: 10" を返す', () => {
    expect(
      probe(source, "console.log[counter.describe[]]")[0],
      "fn describe メソッドを追加しましょう / Add a describe method",
    ).toBe("Count: 10");
  });
});
