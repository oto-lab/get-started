# Lesson 16 — Generators

[日本語](./README-ja.md)

## Syntax

A function that contains `yield` is automatically compiled as a generator (`function*`) — no special syntax needed:

```purus
fn evens limit
  let n be 0
  while n le limit
    yield n
    n add be 2
```

Iterate over the yielded values with `for ... in`:

```purus
for v in evens[6]
  console.log[v]      -- 0, 2, 4, 6
```

## Task

Make `count-up limit` yield `1, 2, ..., limit` in order. When `limit` is `0`, it should yield nothing.

## Check

```sh
npm test 16
```

## Learn more

- [Functions — Generator Functions](https://purus.work/reference/functions/)
