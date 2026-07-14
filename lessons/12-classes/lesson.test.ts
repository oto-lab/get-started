import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 12 — Classes", () => {
  it("counter starts at 10 / counter の初期値が 10 になっている", () => {
    expect(
      probe(source, "console.log[counter.value]")[0],
      "fn new start のコンストラクタは最初から書かれています / The fn new constructor is given",
    ).toBe("10");
  });

  it("increment[] adds 1 / increment で 1 増える", () => {
    expect(
      probe(source, "counter.increment[]\ncounter.increment[]\nconsole.log[counter.value]")[0],
      "this.value add be 1 する increment メソッドを追加しましょう / Add an increment method that does: this.value add be 1",
    ).toBe("12");
  });

  it('describe[] returns "Count: 10" / describe が "Count: 10" を返す', () => {
    expect(
      probe(source, "console.log[counter.describe[]]")[0],
      "//;Count: [this.value];// を返す describe メソッドを追加しましょう / Add a describe method returning //;Count: [this.value];//",
    ).toBe("Count: 10");
  });
});
