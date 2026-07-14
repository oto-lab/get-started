# Lesson 10 — スイッチ

[English](./README.md)

## 構文

`switch` は値を各 `case` と比較します。`case blank` は何にでも一致するワイルドカードです（JavaScript の `default` 相当。`blank` は Shift 不要な `_` の Purus 版です）:

```purus
switch status
  case //;ok;// then console.log[//;good;//]
  case //;ng;// then console.log[//;bad;//]
  case blank then console.log[//;unknown;//]
```

## 課題

`greet-in` に 2 つの case を追加してください:

| 入力 | 出力 |
|---|---|
| `//;ja;//` | `Konnichiwa` |
| それ以外（`blank`） | `Unknown language` |

## 確認

```sh
npm test 10
```

基礎編はここまで！Lesson 11 からは中級編です: パイプライン、クラス、エラー処理、非同期、標準ライブラリ、ジェネレータを学びます。

## 参考

- [制御構文 — Switch](https://purus.work/ja/reference/control-flow/)
