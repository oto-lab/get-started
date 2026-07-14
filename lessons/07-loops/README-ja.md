# Lesson 07 — ループ

[English](./README.md)

## 構文

`while` は条件が true の間くり返します。変数の更新は複合代入で行います:

```purus
let i be 0
while i lt 10
  i add be 1     -- i += 1
```

`for ... in` はリストの要素を順にたどります:

```purus
for item in items
  console.log[item]
```

## 課題

1. `sum-up n` が `while` ループで `1` から `n` までの合計を返すようにする。
2. `for ... in` で `fruits` の各要素を 1 行ずつ出力する。

## 確認

```sh
npm test 07
```

## 参考

- [制御構文 — ループ](https://purus.work/ja/reference/control-flow/)
