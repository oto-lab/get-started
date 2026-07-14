import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 05 — Functions", () => {
  it("double[21] returns 42 / double[21] が 42 を返す", () => {
    expect(
      probe(source, "console.log[double[21]]")[0],
      "fn double x to return x mul 2 と書きましょう / Write: fn double x to return x mul 2",
    ).toBe("42");
  });

  it("double[5] returns 10 / double[5] が 10 を返す", () => {
    expect(
      probe(source, "console.log[double[5]]")[0],
      "どんな x でも 2 倍を返すようにしましょう / double should work for any x",
    ).toBe("10");
  });

  it("add-nums[2; 3] returns 5 / add-nums[2; 3] が 5 を返す", () => {
    expect(
      probe(source, "console.log[add-nums[2; 3]]")[0],
      "return a add b と書きましょう / Return a add b",
    ).toBe("5");
  });

  it("add-nums[10; -4] returns 6 / add-nums[10; -4] が 6 を返す", () => {
    expect(
      probe(source, "console.log[add-nums[10; -4]]")[0],
      "負の数でも正しく動くはずです / It should also work with negative numbers",
    ).toBe("6");
  });
});
