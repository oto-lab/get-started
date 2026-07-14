# Lesson 13 — エラー処理

[English](./README.md)

## 構文

エラーは `throw` で投げ、`try` / `catch`（必要なら `finally`）で処理します:

```purus
fn risky
  throw new Error[//;something went wrong;//]

try
  risky[]
catch e
  console.log[e.message]
finally
  cleanup[]
```

`try` は式としても使えます:

```purus
const result be try
  risky[]
catch e
  default-value
```

## 課題

1. `safe-divide` が `b eq 0` のとき `new Error[//;division by zero;//]` を throw するようにする。
2. `try-divide` が呼び出しを `try`/`catch` で包み、エラー時に `//;error: [e.message];//` を返すようにする。

## 確認

```sh
npm test 13
```

## 参考

- [制御構文 — try / catch / finally](https://purus.work/ja/reference/control-flow/)
