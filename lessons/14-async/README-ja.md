# Lesson 14 — 非同期処理 (async / await)

[English](./README.md)

## 構文

非同期関数は `async fn` で宣言し、Promise を返します。中では `await` で他の Promise の完了を待てます:

```purus
async fn fetch-data url
  const res be await fetch[url]
  return await res.json[]
```

無名の async 関数も書けます:

```purus
const handler be async fn event to await process[event]
```

## 課題

`compute` を次のようにしてください:

1. `await slow-double[x]` して結果を受け取る
2. その結果に `1` を足して返す

`compute[5]` の結果は `11` になります。

## 確認

```sh
npm test 14
```

## 参考

- [関数 — 非同期関数](https://purus.work/ja/reference/functions/)
