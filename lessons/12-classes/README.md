# Lesson 12 — Classes

[日本語](./README-ja.md)

## Syntax

Declare a class with an indented body. `fn new` is the constructor, and methods are `fn` declarations inside the class:

```purus
class Animal
  fn new name
    this.name be name

  fn speak
    console.log[//;[this.name] says hello;//]

const dog be new Animal[//;Pochi;//]
dog.speak[]
```

Compiles to:

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

## Task

Add two methods to `Counter`:

1. `increment` — adds 1 to `this.value` (hint: `this.value add be 1`)
2. `describe` — returns `//;Count: [this.value];//`

## Check

```sh
npm test 12
```

## Learn more

- [Classes](https://purus.work/reference/classes/)
