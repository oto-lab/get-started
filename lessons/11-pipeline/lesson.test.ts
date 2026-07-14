import { describe, expect, it } from "vitest";
import { readLesson, probe } from "../helper";

const source = readLesson(import.meta.url);

describe("Lesson 11 — Pipeline & Nullish Coalescing", () => {
  it("result is 11 (5 pipe double pipe increment)", () => {
    expect(
      probe(source, "console.log[result]")[0],
      "5 pipe double pipe increment と書きましょう / Chain with pipe",
    ).toBe("11");
  });

  it("uses pipe / pipe を使っている", () => {
    const line = source.split("\n").find((l) => l.includes("const result")) ?? "";
    expect(
      line.includes("pipe"),
      "計算結果を直接書くのではなく pipe を使いましょう / Use pipe instead of hard-coding the value",
    ).toBe(true);
  });

  it("port is 3000 (config-port coal 3000)", () => {
    expect(
      probe(source, "console.log[port]")[0],
      "config-port coal 3000 と書きましょう / Fall back with coal",
    ).toBe("3000");
  });

  it("uses coal / coal を使っている", () => {
    const line = source.split("\n").find((l) => l.includes("const port")) ?? "";
    expect(
      line.includes("coal"),
      "3000 を直接書くのではなく coal を使いましょう / Use coal instead of hard-coding 3000",
    ).toBe(true);
  });
});
