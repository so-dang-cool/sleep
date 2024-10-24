[![JSR](https://jsr.io/badges/@so-dang-cool/sleep)](https://jsr.io/@so-dang-cool/sleep)
[![NPM Version](https://img.shields.io/npm/v/@so-dang-cool/sleep)](https://www.npmjs.com/package/@so-dang-cool/sleep)
[![GitHub last commit](https://img.shields.io/github/last-commit/so-dang-cool/sleep)](https://github.com/so-dang-cool/sleep)

# `@so-dang-cool/sleep` 💤

Pause execution, for TS/JS.

```ts
import { sleep } from "@so-dang-cool/sleep"

console.log("Let's begin.");
await sleep.millis(500);

console.log("Wait a second!");
await sleep.seconds(1);

console.log("Now wait just half a minute!");
await sleep.minutes(1/2);

console.log("Wait until next week! (good luck)");
const oneWeek = 1000 * 60 * 60 * 24 * 7;
await sleep.until(Date.now() + oneWeek);

// Also:
//
// sleep.hours(...);
// sleep.days(...);
//
// sleep(...) by itself also takes milliseconds.

// Promise-based chaining also works:
sleep.seconds(1).then(() => fetch(/* etc /*));
```

## DIY

If you prefer to avoid dependencies, these are the mechanics of the
`sleep(...)` and `sleep.<duration>(...)` functions:

```ts
const sleep = async (delayMillis) =>
    new Promise((resolve) => setTimeout(resolve, delayMillis));

// Wait 1 second
await sleep(1000);
```

`async` and `await` are syntactic sugar over the `Promise` built-in object in
JavaScript. A `Promise` works by considering itself incomplete when created,
and passes functions of `resolve` and `reject` that can be used to report
completion. We make the built-in function `setTimeout(...)` report a successful
completion with `resolve` and `await` the results. Voila, we can now pause
execution with millisecond-level granularity.

This is a publicly well-known pattern in JavaScript, and numerous examples
existed before this library. You do not have to reference this project in
order to implement your own version of `sleep(...)`.

## Etc

Oct 2024, by [J.R. Hill](https://so.dang.cool)

BSD 3-Clause License
