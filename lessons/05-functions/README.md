# Lesson 05 — Functions

[日本語](./README-ja.md)

## Syntax

Declare a one-liner function with `to`:

```purus
fn double x to return x mul 2
```

Or use an indented block body. Separate multiple parameters with `;`:

```purus
fn add a; b
  return a add b
```

Call functions with `[]`, separating arguments with `;`:

```purus
double[21]      -- 42
add[1; 2]       -- 3
```

## Task

1. Make `double` return `x mul 2`.
2. Make `add-nums` return `a add b`.

## Check

```sh
npm test 05
```

## Learn more

- [Functions](https://purus.work/reference/functions/)
