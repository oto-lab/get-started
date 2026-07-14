# Lesson 06 — Conditionals

[日本語](./README-ja.md)

## Syntax

`if` / `elif` / `else` with indented blocks — no braces needed:

```purus
if x lt 0
  console.log[//;negative;//]
elif x eq 0
  console.log[//;zero;//]
else
  console.log[//;positive;//]
```

Comparison operators:

| Purus | JavaScript |
|---|---|
| `eq` | `===` |
| `neq` | `!==` |
| `lt` | `<` |
| `gt` | `>` |
| `le` | `<=` |
| `ge` | `>=` |

## Task

Make `sign x` return `positive`, `zero`, or `negative` depending on `x`.

## Check

```sh
npm test 06
```

## Learn more

- [Control Flow](https://purus.work/reference/control-flow/)
