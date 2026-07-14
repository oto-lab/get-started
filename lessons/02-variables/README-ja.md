# Lesson 02 — 変数

[English](./README.md)

## 構文

変数は必ず `const` / `let` / `var` で宣言します。Purus では `=` の代わりに `be` を使います:

```purus
const pi be 3.14     -- 定数（再代入不可）
let count be 0       -- 可変の変数
```

可変の変数を更新するには複合代入を使います:

```purus
count add be 10      -- count += 10
count sub be 1       -- count -= 1
count mul be 2       -- count *= 2
```

## 課題

1. 定数 `language` の値を文字列 `Purus` にする。
2. `add be` を使って `count` に `10` を足す。

## 確認

```sh
npm test 02
```

## 参考

- [構文の概要 — 変数](https://purus.work/ja/reference/syntax/)
