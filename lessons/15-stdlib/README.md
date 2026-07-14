# Lesson 15 — Standard Library

[日本語](./README-ja.md)

## Syntax

`use` imports Purus's built-in standard library. Module names start with `p-`, and `as` gives them a short alias. Only the functions you actually use end up in the compiled JavaScript (tree-shaking):

```purus
use p-math as m
use p-array as arr
use p-string as s

m.floor[4.7]              -- 4
arr.first[[7, 8]]         -- 7
s.upper[//;purus;//]      -- "PURUS"
```

Available modules: `p-math`, `p-array`, `p-string`, `p-random`, `p-datetime`, `p-json`, `p-object`, `p-number`, `p-error`.

## Task

1. Round `3.7` with `m.round` → `4`
2. Find the largest of `3`, `1`, `4` with `m.max` (arguments separated by `;`)
3. Sum `[1, 2, 3]` with `arr.sum` (note: the array is one argument — `arr.sum[[1, 2, 3]]`)

## Check

```sh
npm test 15
```

## Learn more

- [Modules — use](https://purus.work/reference/modules/)
- [p-math](https://purus.work/stdlib/math/) / [p-array](https://purus.work/stdlib/array/)
