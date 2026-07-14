import { describe, expect, it } from "vitest";
import { readLesson, probeAsync } from "../helper";

const source = readLesson(import.meta.url);

const probeCompute = (n: number) =>
  probeAsync(
    source,
    `async fn probe-main\n  console.log[await compute[${n}]]\nprobe-main[]`,
  );

describe("Lesson 14 — Async / Await", () => {
  it("compute[5] resolves to 11", async () => {
    expect(
      (await probeCompute(5))[0],
      "await slow-double[x] してから 1 を足しましょう / Await slow-double, then add 1",
    ).toBe("11");
  });

  it("compute[10] resolves to 21", async () => {
    expect((await probeCompute(10))[0]).toBe("21");
  });

  it("uses await / await を使っている", () => {
    expect(
      source.includes("await"),
      "await で slow-double の結果を待ちましょう / Wait for slow-double with await",
    ).toBe(true);
  });
});
