import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 16 — Generators", () => {
  it("count-up[3] prints 1, 2, 3 / count-up[3] が 1, 2, 3 を出力する", () => {
    expect(
      run(source).stdout,
      "1 から limit まで順に yield しましょう / Yield 1 through limit in order",
    ).toEqual(["1", "2", "3"]);
  });

  it("count-up[5] yields 1..5 / count-up[5] が 1..5 を yield する", () => {
    expect(
      probe(
        source,
        "const collected be Array.from[count-up[5]]\nconsole.log[collected.join[//;,;//]]",
      )[0],
      "どんな limit でも動くようにしましょう / It should work for any limit",
    ).toBe("1,2,3,4,5");
  });

  it("count-up[0] yields nothing / count-up[0] は何も yield しない", () => {
    expect(
      probe(source, "console.log[Array.from[count-up[0]].length]")[0],
      "limit が 0 のときは while に入らないはずです / The while loop should not run when limit is 0",
    ).toBe("0");
  });
});
