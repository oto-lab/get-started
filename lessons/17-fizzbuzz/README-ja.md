# Lesson 17 — FizzBuzz（卒業課題）

[English](./README.md)

最後の課題です！これまで学んだすべて — 関数、`if`/`elif`/`else`、`mod`、文字列補間、ループ — を使って定番の FizzBuzz を書きましょう。

## ルール

| 入力 | 出力 |
|---|---|
| 15 の倍数 | `FizzBuzz` |
| 3 の倍数 | `Fizz` |
| 5 の倍数 | `Buzz` |
| それ以外 | 数値そのまま。例: `7` |

## 課題

1. ルールどおりに `fizzbuzz n` を実装する。15 の倍数の判定は 3 や 5 より**先に**！
2. `n` を 1 から 15 までループして（ヒント: `for n in [1..15]`）、それぞれ `fizzbuzz[n]` を出力する。

期待される出力:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

## 確認

```sh
npm test 17
```

## 🎉 おめでとうございます！

これが最後のレッスンでした。`npm run progress` で全記録を確認したら、次に進みましょう:

- [Purus ドキュメント](https://purus.work)
- [Playground](https://playground.purus.work) — ブラウザで Purus を試す
- 実際に何か作ってみる: `npx purus init my-project`
