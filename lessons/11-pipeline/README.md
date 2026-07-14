# Lesson 11 — Pipeline & Nullish Coalescing

[日本語](./README-ja.md)

## Syntax

`pipe` passes the left value to the right function — data flows left to right:

```purus
5 pipe double                  -- double(5)
5 pipe double pipe increment   -- increment(double(5))
data pipe transform[extra]     -- transform(data, extra)
```

`coal` returns the right side only when the left is `null` or `undefined` (JS `??`). Unlike `or`, it keeps `0`, `false`, and `""`:

```purus
config.port coal 3000          -- config.port ?? 3000
0 coal 99                      -- 0   (kept!)
0 or 99                        -- 99  (or discards falsy values)
```

## Task

1. Pipe `5` through `double`, then `increment` — `result` becomes `11`.
2. Use `coal` so `port` falls back to `3000` when `config-port` is `null`.

## Check

```sh
npm test 11
```

## Learn more

- [Operators — Pipeline / Nullish Coalescing](https://purus.work/reference/operators/)
