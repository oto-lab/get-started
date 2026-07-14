# Lesson 13 — Error Handling

[日本語](./README-ja.md)

## Syntax

Raise errors with `throw`, handle them with `try` / `catch` (and optional `finally`):

```purus
fn risky
  throw new Error[//;something went wrong;//]

try
  risky[]
catch e
  console.log[e.message]
finally
  cleanup[]
```

`try` also works as an expression:

```purus
const result be try
  risky[]
catch e
  default-value
```

## Task

1. Make `safe-divide` throw `new Error[//;division by zero;//]` when `b eq 0`.
2. Make `try-divide` wrap the call in `try`/`catch` and return `//;error: [e.message];//` on error.

## Check

```sh
npm test 13
```

## Learn more

- [Control Flow — try / catch / finally](https://purus.work/reference/control-flow/)
