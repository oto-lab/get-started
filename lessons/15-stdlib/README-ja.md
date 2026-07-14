# Lesson 15 — 標準ライブラリ

[English](./README.md)

## 構文

`use` は Purus 組み込みの標準ライブラリを読み込みます。モジュール名は `p-` で始まり、`as` で短い別名を付けます。実際に使った関数だけがコンパイル後の JavaScript に含まれます（tree-shaking）:

```purus
use p-math as m
use p-array as arr
use p-string as s

m.floor[4.7]              -- 4
arr.first[[7, 8]]         -- 7
s.upper[//;purus;//]      -- "PURUS"
```

利用できるモジュール: `p-math`、`p-array`、`p-string`、`p-random`、`p-datetime`、`p-json`、`p-object`、`p-number`、`p-error`。

## 課題

1. `m.round` で `3.7` を四捨五入 → `4`
2. `m.max` で `3`・`1`・`4` の最大値（引数は `;` 区切り）
3. `arr.sum` で `[1, 2, 3]` の合計（配列が 1 つの引数なので `arr.sum[[1, 2, 3]]`）

## 確認

```sh
npm test 15
```

## 参考

- [モジュール — use](https://purus.work/ja/reference/modules/)
- [p-math](https://purus.work/ja/stdlib/math/) / [p-array](https://purus.work/ja/stdlib/array/)
