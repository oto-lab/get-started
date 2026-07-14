# Lesson 07 — Loops

[日本語](./README-ja.md)

## Syntax

`while` repeats while a condition is true. Update variables with compound assignment:

```purus
let i be 0
while i lt 10
  i add be 1     -- i += 1
```

`for ... in` iterates over a list:

```purus
for item in items
  console.log[item]
```

## Task

1. Make `sum-up n` return the sum of `1` through `n` using a `while` loop.
2. Print each element of `fruits` on its own line using `for ... in`.

## Check

```sh
npm test 07
```

## Learn more

- [Control Flow — Loops](https://purus.work/reference/control-flow/)
