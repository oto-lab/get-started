# Lesson 03 — Strings

[日本語](./README-ja.md)

## Syntax

Write `[expr]` inside a string to embed any expression — this is string interpolation, like `${}` in JavaScript:

```purus
const name be //;Alice;//
const age be 30
const msg be //;Hello, [name]! You are [age] years old.;//
```

Compiles to:

```js
const msg = `Hello, ${name}! You are ${age} years old.`;
```

To write a literal `[` or `]`, escape it: `\[` `\]`.

## Task

Use interpolation with `[name]` so that `greeting` becomes `Hello, World!`.

## Check

```sh
npm test 03
```

## Learn more

- [Syntax Overview — String interpolation](https://purus.work/reference/syntax/)
