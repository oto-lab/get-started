# Lesson 16 — ジェネレータ

[English](./README.md)

## 構文

`yield` を含む関数は自動的にジェネレータ（`function*`）としてコンパイルされます。特別な構文は不要です:

```purus
fn evens limit
  let n be 0
  while n le limit
    yield n
    n add be 2
```

yield された値は `for ... in` で順に受け取れます:

```purus
for v in evens[6]
  console.log[v]      -- 0, 2, 4, 6
```

## 課題

`count-up limit` が `1, 2, ..., limit` を順に yield するようにしてください。`limit` が `0` のときは何も yield しません。

## 確認

```sh
npm test 16
```

## 参考

- [関数 — ジェネレータ関数](https://purus.work/ja/reference/functions/)
