# Lesson 05 — 関数

[English](./README.md)

## 構文

`to` を使うと 1 行で関数を宣言できます:

```purus
fn double x to return x mul 2
```

インデントしたブロック本体も使えます。複数の引数は `;` で区切ります:

```purus
fn add a; b
  return a add b
```

呼び出しは `[]` を使い、引数は `;` で区切ります:

```purus
double[21]      -- 42
add[1; 2]       -- 3
```

## 課題

1. `double` が `x mul 2` を返すようにする。
2. `add-nums` が `a add b` を返すようにする。

## 確認

```sh
npm test 05
```

## 参考

- [関数](https://purus.work/ja/reference/functions/)
