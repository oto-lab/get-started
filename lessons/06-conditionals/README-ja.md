# Lesson 06 — 条件分岐

[English](./README.md)

## 構文

`if` / `elif` / `else` とインデントでブロックを作ります。`{}` は不要です:

```purus
if x lt 0
  console.log[//;negative;//]
elif x eq 0
  console.log[//;zero;//]
else
  console.log[//;positive;//]
```

比較演算子:

| Purus | JavaScript |
|---|---|
| `eq` | `===` |
| `neq` | `!==` |
| `lt` | `<` |
| `gt` | `>` |
| `le` | `<=` |
| `ge` | `>=` |

## 課題

`sign x` が `x` に応じて `positive`・`zero`・`negative` を返すようにしてください。

## 確認

```sh
npm test 06
```

## 参考

- [制御構文](https://purus.work/ja/reference/control-flow/)
