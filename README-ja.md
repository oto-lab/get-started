# Purus をはじめよう

[English](./README.md)

[Purus](https://purus.work) プログラミング言語のインタラクティブチュートリアルです。
実際に Purus のコードを書きながら、[Vitest](https://vitest.dev) が答え合わせをしてくれます。

## 必要環境

- Node.js 22 以上

## セットアップ

```sh
npm install
npm start
```

`npm start` を実行すると言語（English / 日本語）を聞かれ、レッスンが作業用の
`exercises/` にコピーされます。コピーされたコメントと README は選んだ言語だけになります。

```sh
npm start -- ja   # プロンプトをスキップ
npm start -- en
```

## ガイドモード（おすすめ）

```sh
npm run guide
```

ガイドが最初の未完了レッスンを見つけてテストを実行し、フォルダを監視します。
`main.purus` を保存すると再チェックされ、green になったら自動で次のレッスンへ
進みます。（Ctrl+C で終了。進捗が消えることはありません）

## 手動モード

1. `exercises/` の中のレッスンフォルダを開き、`README.md` を読む。
2. そのフォルダの `main.purus` を編集して `TODO` を完成させる。
3. レッスンのテストを実行する:

   ```sh
   npm test 01             # レッスン 01 だけ実行
   npm test                # 全レッスンを実行
   npm run test:watch 01   # レッスン 01 を保存するたびに自動で再実行
   ```

4. テストが green になったら次のレッスンへ！

進捗はいつでも確認できます:

```sh
npm run progress
```

```
  ✅ 01-hello-world
  ⬜ 02-variables (0/2)
  ...
  1/17 レッスン完了
```

詰まったときは [lessons/](./lessons/) の各テンプレートフォルダにある `solution.purus` を見てもかまいません。

最初からやり直すには `npm start` をもう一度実行します（上書き前に確認されます）。

## レッスン一覧

| # | レッスン | トピック |
|---|---|---|
| 01 | Hello, World | `console.log`、`//;文字列;//` |
| 02 | 変数 | `const`、`let`、`be`、`add be` |
| 03 | 文字列 | 補間 `[式]` |
| 04 | 演算子 | `add` `sub` `mul` `mod` `pow` |
| 05 | 関数 | `fn`、`to return`、`[]` での呼び出し |
| 06 | 条件分岐 | `if` / `elif` / `else`、`eq` `gt` |
| 07 | ループ | `while`、`for ... in` |
| 08 | 配列 | リテラル、`[\0]`、範囲、分割代入 |
| 09 | オブジェクト | リテラル、`object[...]` 分割代入 |
| 10 | スイッチ | `switch` / `case` / `blank` |
| 11 | パイプラインと Null 合体 | `pipe`、`coal` |
| 12 | クラス | `class`、`fn new`、`this` |
| 13 | エラー処理 | `throw`、`try` / `catch` |
| 14 | 非同期処理 | `async fn`、`await` |
| 15 | 標準ライブラリ | `use p-math`、`use p-array` |
| 16 | ジェネレータ | `yield` |
| 17 | FizzBuzz（卒業課題） | 総合演習 🎓 |

## 開発者・fork 向け

`lessons/` がテンプレートです: 言語別スターター（`main.en.purus` /
`main.ja.purus`）、README（`README.md` / `README-ja.md`）、`solution.purus`、
レッスンのテストが入っています。`npm start` がこれらを `exercises/`
（gitignore 済み）にコピーするので、学習者がテンプレートを書き換えることはありません。

| スクリプト | 説明 |
|---|---|
| `npm run test:solutions` | 全 `solution.purus` がレッスンのテストを通ることを確認 |
| `npm run format` | Prettier でフォーマット |
| `npm run lint` | purus-lint でリント |

## 参考

- [Purus ドキュメント](https://purus.work)
- [Playground](https://playground.purus.work)
