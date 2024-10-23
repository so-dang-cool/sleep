import { describe, expect, it } from "vitest";
import { sleep } from "./sleep";

describe("sleepsort", () => {
	it("can be used for sorting", async () => {
		const inputs = [5, 1, 3, 4, 2];
		const outputs: number[] = [];

		await Promise.all(
			inputs.map((n) => sleep.millis(n * 200).then(() => outputs.push(n))),
		);

		expect(outputs).toEqual([1, 2, 3, 4, 5]);
	});
});
