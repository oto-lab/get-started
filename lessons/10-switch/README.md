# Lesson 10 — Switch

[日本語](./README-ja.md)

## Syntax

`switch` compares a value against each `case`. `case blank` is the wildcard that matches anything (like `default` in JavaScript — `blank` is Purus's Shift-free `_`):

```purus
switch status
  case //;ok;// then console.log[//;good;//]
  case //;ng;// then console.log[//;bad;//]
  case blank then console.log[//;unknown;//]
```

## Task

Add two cases to `greet-in`:

| Input | Output |
|---|---|
| `//;ja;//` | `Konnichiwa` |
| anything else (`blank`) | `Unknown language` |

## Check

```sh
npm test 10
```

Basics complete! From Lesson 11 on, you'll learn intermediate features: pipelines, classes, error handling, async, the standard library, and generators.

## Learn more

- [Control Flow — Switch](https://purus.work/reference/control-flow/)
