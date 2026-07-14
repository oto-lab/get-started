# Lesson 12 — クラス

[English](./README.md)

## 構文

クラスはインデントした本体で宣言します。`fn new` がコンストラクタで、メソッドはクラス内の `fn` 宣言です:

```purus
class Animal
  fn new name
    this.name be name

  fn speak
    console.log[//;[this.name] says hello;//]

const dog be new Animal[//;Pochi;//]
dog.speak[]
```

コンパイル結果:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says hello`);
  }
}
const dog = new Animal("Pochi");
dog.speak();
```

## 課題

`Counter` に 2 つのメソッドを追加してください:

1. `increment` — `this.value` に 1 を足す（ヒント: `this.value add be 1`）
2. `describe` — `//;Count: [this.value];//` を返す

## 確認

```sh
npm test 12
```

## 参考

- [クラス](https://purus.work/ja/reference/classes/)
