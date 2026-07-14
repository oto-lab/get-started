# Lesson 14 — Async / Await

[日本語](./README-ja.md)

## Syntax

Declare async functions with `async fn`. They return a Promise. Use `await` inside them to wait for other Promises:

```purus
async fn fetch-data url
  const res be await fetch[url]
  return await res.json[]
```

Anonymous async functions work too:

```purus
const handler be async fn event to await process[event]
```

## Task

Make `compute`:

1. `await slow-double[x]` and store the result
2. return the result plus `1`

So `compute[5]` resolves to `11`.

## Check

```sh
npm test 14
```

## Learn more

- [Functions — Async functions](https://purus.work/reference/functions/)
