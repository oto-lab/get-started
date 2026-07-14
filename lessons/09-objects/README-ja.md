# Lesson 09 — オブジェクト

[English](./README.md)

## 構文

オブジェクトも `[]` を使い、キーと値の間に `be`、プロパティの間に `,` を書きます:

```purus
const person be [name be //;Alice;//, age be 30]
console.log[person.name]        -- Alice
```

`[be]` は空オブジェクトです。プロパティの分割代入は `object[...]` を使います:

```purus
const object[name; age] be person
-- JS: const { name, age } = person;
```

## 課題

`cat` を `name` = `Tama`、`age` = `3` のオブジェクトにしてください。その下の分割代入と補間付き `console.log` はそのまま動くので、`cat` が正しくなれば出力が `Tama is 3 years old` になります。

## 確認

```sh
npm test 09
```

## 参考

- [構文の概要 — オブジェクト](https://purus.work/ja/reference/syntax/)
