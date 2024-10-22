# `@so-dang-cool/sleep`

Pause execution, for TS/JS.

```ts
import { sleep } from "@so-dang-cool/sleep"

console.log("Let's begin.");
await sleep.millis(500);

console.log("Now wait a second!");
await sleep.seconds(1);

console.log("Now wait just half a minute!");
await sleep.minutes(1/2);

// Also:
//
// sleep.hours(...);
// sleep.days(...);
//
// sleep(...) by itself also takes milliseconds.

// Promise-based chaining also works:
sleep.seconds(1).then(() => fetch(/* etc /*));
```

Oct 2024, by [J.R. Hill](https://so.dang.cool)

BSD 3-Clause License
