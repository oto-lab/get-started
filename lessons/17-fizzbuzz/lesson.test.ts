import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

const EXPECTED_1_TO_15 = [
  "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
  "11", "Fizz", "13", "14", "FizzBuzz",
];

describe("Lesson 17 — FizzBuzz (Capstone)", () => {
  it('fizzbuzz[3] is "Fizz"', () => {
    expect(probe(source, "console.log[fizzbuzz[3]]")[0]).toBe("Fizz");
  });

  it('fizzbuzz[5] is "Buzz"', () => {
    expect(probe(source, "console.log[fizzbuzz[5]]")[0]).toBe("Buzz");
  });

  it('fizzbuzz[15] is "FizzBuzz"', () => {
    expect(
      probe(source, "console.log[fizzbuzz[15]]")[0],
      "15 の倍数の判定は 3 や 5 より先に行いましょう / Check the multiple of 15 before 3 and 5",
    ).toBe("FizzBuzz");
  });

  it('fizzbuzz[7] is "7"', () => {
    expect(probe(source, "console.log[fizzbuzz[7]]")[0]).toBe("7");
  });

  it('fizzbuzz[30] is "FizzBuzz"', () => {
    expect(probe(source, "console.log[fizzbuzz[30]]")[0]).toBe("FizzBuzz");
  });

  it("prints fizzbuzz for 1..15 / 1..15 のループを出力する", () => {
    expect(
      run(source).stdout,
      "for n in [1..15] で fizzbuzz[n] を出力しましょう / Print fizzbuzz[n] for 1..15",
    ).toEqual(EXPECTED_1_TO_15);
  });
});
