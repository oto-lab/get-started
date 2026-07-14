# Lesson 08 — 配列

[English](./README.md)

## 構文

```purus
const arr be [1, 2, 3]      -- 配列リテラル
const x be arr[\0]          -- 要素アクセス（\ に注意）
const nums be [0..4]        -- 範囲: [0, 1, 2, 3, 4]
const [a; b] be arr         -- 分割代入
```

`[]` は関数呼び出しにも使われるため、要素アクセスには `\` を付けます:

| 構文 | 意味 |
|---|---|
| `f[x]` | 関数呼び出し `f(x)` |
| `arr[\x]` | 要素アクセス `arr[x]` |

## 課題

1. `numbers` の最初の要素を `first` に取り出す。
2. 範囲リテラルで `[0, 1, 2, 3, 4]` を作る。
3. 2 行の `const ... be //;???;//` を分割代入 1 行に書き換える。

## 確認

```sh
npm test 08
```

## 参考

- [構文の概要 — 配列](https://purus.work/ja/reference/syntax/)
