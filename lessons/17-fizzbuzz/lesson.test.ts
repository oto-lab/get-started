import { describe, expect, it } from "vitest";
import { readLesson, probe, run } from "../helper";

const source = readLesson(import.meta.url);

const EXPECTED_1_TO_15 = [
  "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
  "11", "Fizz", "13", "14", "FizzBuzz",
];

describe("Lesson 17 — FizzBuzz (Capstone)", () => {
  it('fizzbuzz[3] is "Fizz" / fizzbuzz[3] が "Fizz" になる', () => {
    expect(
      probe(source, "console.log[fizzbuzz[3]]")[0],
      "n mod 3 eq 0 のとき Fizz を返しましょう / Return Fizz when n mod 3 eq 0",
    ).toBe("Fizz");
  });

  it('fizzbuzz[5] is "Buzz" / fizzbuzz[5] が "Buzz" になる', () => {
    expect(
      probe(source, "console.log[fizzbuzz[5]]")[0],
      "n mod 5 eq 0 のとき Buzz を返しましょう / Return Buzz when n mod 5 eq 0",
    ).toBe("Buzz");
  });

  it('fizzbuzz[15] is "FizzBuzz" / fizzbuzz[15] が "FizzBuzz" になる', () => {
    expect(
      probe(source, "console.log[fizzbuzz[15]]")[0],
      "15 の倍数の判定は 3 や 5 より先に行いましょう / Check the multiple of 15 before 3 and 5",
    ).toBe("FizzBuzz");
  });

  it('fizzbuzz[7] is "7" / fizzbuzz[7] が "7" になる', () => {
    expect(
      probe(source, "console.log[fizzbuzz[7]]")[0],
      "どれにも当てはまらないときは数値を文字列で返しましょう（//;[n];//） / Otherwise return the number as a string: //;[n];//",
    ).toBe("7");
  });

  it('fizzbuzz[30] is "FizzBuzz" / fizzbuzz[30] が "FizzBuzz" になる', () => {
    expect(
      probe(source, "console.log[fizzbuzz[30]]")[0],
      "15 の倍数は 15 だけではありません / 15 is not the only multiple of 15",
    ).toBe("FizzBuzz");
  });

  it("prints fizzbuzz for 1..15 / 1..15 のループを出力する", () => {
    expect(
      run(source).stdout,
      "for n in [1..15] で fizzbuzz[n] を出力しましょう / Print fizzbuzz[n] for 1..15",
    ).toEqual(EXPECTED_1_TO_15);
  });
});
