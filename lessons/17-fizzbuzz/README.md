# Lesson 17 — FizzBuzz (Capstone)

[日本語](./README-ja.md)

The final challenge! Write the classic FizzBuzz using everything you've learned — functions, `if`/`elif`/`else`, `mod`, string interpolation, and loops.

## Rules

| Input | Output |
|---|---|
| multiple of 15 | `FizzBuzz` |
| multiple of 3 | `Fizz` |
| multiple of 5 | `Buzz` |
| anything else | the number itself, e.g. `7` |

## Task

1. Implement `fizzbuzz n` following the rules. Careful — check the multiple of 15 **before** 3 and 5!
2. Loop `n` from 1 to 15 (hint: `for n in [1..15]`) and print `fizzbuzz[n]` for each.

Expected output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

## Check

```sh
npm test 17
```

## 🎉 Congratulations!

This was the last lesson. Run `npm run progress` to see your full record, then keep exploring:

- [Purus Documentation](https://purus.work)
- [Playground](https://playground.purus.work) — try Purus in the browser
- Build something real: `npx purus init my-project`
