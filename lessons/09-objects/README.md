# Lesson 09 — Objects

[日本語](./README-ja.md)

## Syntax

Objects also use `[]`, with `be` between key and value and `,` between properties:

```purus
const person be [name be //;Alice;//, age be 30]
console.log[person.name]        -- Alice
```

`[be]` is an empty object. Destructure properties with `object[...]`:

```purus
const object[name; age] be person
-- JS: const { name, age } = person;
```

## Task

Make `cat` an object with `name` = `Tama` and `age` = `3`. The destructuring line and the interpolated `console.log` below it already work — once `cat` is correct, the output becomes `Tama is 3 years old`.

## Check

```sh
npm test 09
```

## Learn more

- [Syntax Overview — Objects](https://purus.work/reference/syntax/)
