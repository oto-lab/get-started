# Lesson 03 — 文字列

[English](./README.md)

## 構文

文字列の中に `[式]` を書くと、任意の式を埋め込めます。JavaScript の `${}` に相当する文字列補間です:

```purus
const name be //;Alice;//
const age be 30
const msg be //;Hello, [name]! You are [age] years old.;//
```

コンパイル結果:

```js
const msg = `Hello, ${name}! You are ${age} years old.`;
```

文字どおりの `[` `]` を書きたいときは `\[` `\]` とエスケープします。

## 課題

`[name]` の補間を使って、`greeting` が `Hello, World!` になるようにしてください。

## 確認

```sh
npm test 03
```

## 参考

- [構文の概要 — 文字列補間](https://purus.work/ja/reference/syntax/)
