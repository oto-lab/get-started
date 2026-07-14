# Get Started with Purus

[日本語](./README-ja.md)

An interactive tutorial for the [Purus](https://purus.work) programming language.
Write real Purus code and let [Vitest](https://vitest.dev) check your answers as you go.

## Requirements

- Node.js >= 22

## Setup

```sh
npm install
npm start
```

`npm start` asks for your language (English / 日本語) and copies the lessons
into `exercises/` — your working directory. All comments and READMEs in the
copy are in the language you picked.

```sh
npm start -- en   # skip the prompt
npm start -- ja
```

## Guided mode (recommended)

```sh
npm run guide
```

The guide finds your first incomplete lesson, runs its tests, and watches
the folder — save `main.purus` to re-check, and it advances automatically
when the tests turn green. (Ctrl+C to quit; progress is never lost.)

## Manual mode

1. Open a lesson folder under `exercises/` and read its `README.md`.
2. Edit `main.purus` in that folder to complete the `TODO`s.
3. Run the lesson's tests:

   ```sh
   npm test 01             # run lesson 01 only
   npm test                # run all lessons
   npm run test:watch 01   # re-run lesson 01 automatically on save
   ```

4. When the tests turn green, move on to the next lesson!

Check how far you've come at any time:

```sh
npm run progress
```

```
  ✅ 01-hello-world
  ⬜ 02-variables (0/2)
  ...
  1/17 lessons complete
```

Stuck? Each template folder in [lessons/](./lessons/) has a `solution.purus` you can peek at.

To start over, run `npm start` again (it asks before overwriting your edits).

## Lessons

| # | Lesson | Topics |
|---|---|---|
| 01 | Hello, World | `console.log`, `//;strings;//` |
| 02 | Variables | `const`, `let`, `be`, `add be` |
| 03 | Strings | interpolation `[expr]` |
| 04 | Operators | `add` `sub` `mul` `mod` `pow` |
| 05 | Functions | `fn`, `to return`, calls with `[]` |
| 06 | Conditionals | `if` / `elif` / `else`, `eq` `gt` |
| 07 | Loops | `while`, `for ... in` |
| 08 | Arrays | literals, `[\0]`, ranges, destructuring |
| 09 | Objects | literals, `object[...]` destructuring |
| 10 | Switch | `switch` / `case` / `blank` |
| 11 | Pipeline & Nullish | `pipe`, `coal` |
| 12 | Classes | `class`, `fn new`, `this` |
| 13 | Error Handling | `throw`, `try` / `catch` |
| 14 | Async | `async fn`, `await` |
| 15 | Standard Library | `use p-math`, `use p-array` |
| 16 | Generators | `yield` |
| 17 | FizzBuzz (Capstone) | everything combined 🎓 |

## For developers / forks

`lessons/` holds the templates: per-language starters (`main.en.purus`,
`main.ja.purus`), READMEs (`README.md`, `README-ja.md`), a `solution.purus`,
and the lesson's tests. `npm start` copies them into `exercises/`
(gitignored), so learners never modify the templates.

| Script | Description |
|---|---|
| `npm run test:solutions` | Verify every `solution.purus` passes its lesson tests |
| `npm run format` | Format with Prettier |
| `npm run lint` | Lint with purus-lint |

## Learn more

- [Purus Documentation](https://purus.work)
- [Playground](https://playground.purus.work)
