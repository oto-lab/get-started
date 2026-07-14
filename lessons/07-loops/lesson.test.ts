import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 07 — Loops", () => {
  it("sum-up[10] is 55 / sum-up[10] が 55 になる", () => {
    expect(
      probe(source, "console.log[sum-up[10]]")[0],
      "while で 1..n を足し合わせましょう / Sum 1..n with a while loop",
    ).toBe("55");
  });

  it("sum-up[1] is 1 / sum-up[1] が 1 になる", () => {
    expect(
      probe(source, "console.log[sum-up[1]]")[0],
      "n が 1 のときは合計も 1 です / When n is 1 the sum is 1",
    ).toBe("1");
  });

  it("sum-up[100] is 5050 / sum-up[100] が 5050 になる", () => {
    expect(
      probe(source, "console.log[sum-up[100]]")[0],
      "どんな n でも動くようにしましょう / It should work for any n",
    ).toBe("5050");
  });

  it("prints each fruit / fruits を 1 行ずつ出力する", () => {
    expect(
      run(source).stdout,
      "for fruit in fruits で console.log[fruit] しましょう / Print each fruit with for-in",
    ).toEqual(["apple", "banana", "cherry"]);
  });
});
