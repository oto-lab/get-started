# Lesson 02 — Variables

[日本語](./README-ja.md)

## Syntax

Variables must be declared with `const`, `let`, or `var`. Purus uses `be` instead of `=`:

```purus
const pi be 3.14     -- constant (cannot reassign)
let count be 0       -- mutable variable
```

To update a mutable variable, use compound assignment:

```purus
count add be 10      -- count += 10
count sub be 1       -- count -= 1
count mul be 2       -- count *= 2
```

## Task

1. Make the constant `language` hold the string `Purus`.
2. Add `10` to `count` using `add be`.

## Check

```sh
npm test 02
```

## Learn more

- [Syntax Overview — Variables](https://purus.work/reference/syntax/)
