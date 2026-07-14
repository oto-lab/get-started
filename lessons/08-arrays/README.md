# Lesson 08 — Arrays

[日本語](./README-ja.md)

## Syntax

```purus
const arr be [1, 2, 3]      -- array literal
const x be arr[\0]          -- index access (note the \)
const nums be [0..4]        -- range: [0, 1, 2, 3, 4]
const [a; b] be arr         -- destructuring
```

Since `[]` is also used for function calls, index access needs a `\` prefix:

| Syntax | Meaning |
|---|---|
| `f[x]` | function call `f(x)` |
| `arr[\x]` | index access `arr[x]` |

## Task

1. Get the first element of `numbers` into `first`.
2. Build `[0, 1, 2, 3, 4]` with a range literal.
3. Replace the two `const ... be //;???;//` lines with one destructuring line.

## Check

```sh
npm test 08
```

## Learn more

- [Syntax Overview — Arrays](https://purus.work/reference/syntax/)
