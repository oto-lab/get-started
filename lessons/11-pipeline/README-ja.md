# Lesson 11 — パイプラインと Null 合体

[English](./README.md)

## 構文

`pipe` は左の値を右の関数に渡します。データが左から右へ流れます:

```purus
5 pipe double                  -- double(5)
5 pipe double pipe increment   -- increment(double(5))
data pipe transform[extra]     -- transform(data, extra)
```

`coal` は左辺が `null` / `undefined` のときだけ右辺を返します（JS の `??`）。`or` と違い、`0` や `false`、`""` はそのまま残ります:

```purus
config.port coal 3000          -- config.port ?? 3000
0 coal 99                      -- 0   （残る！）
0 or 99                        -- 99  （or は falsy をすべて捨てる）
```

## 課題

1. `5` を `double` → `increment` の順に pipe で流して `result` を `11` にする。
2. `coal` を使って、`config-port` が `null` のとき `port` が `3000` になるようにする。

## 確認

```sh
npm test 11
```

## 参考

- [演算子 — パイプライン / Null 合体](https://purus.work/ja/reference/operators/)
