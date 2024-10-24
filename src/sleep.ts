const _sleep = async (millis: number): Promise<void> =>
	new Promise((resolveMe) => setTimeout(resolveMe, millis));

/**
 * Pause execution for a number of milliseconds.
 * @param millis Number of milliseconds to pause.
 */
export const sleep: ((millis: number) => Promise<void>) & {
	millis: (millis: number) => Promise<void>;
	seconds: (seconds: number) => Promise<void>;
	minutes: (minutes: number) => Promise<void>;
	hours: (hours: number) => Promise<void>;
	days: (days: number) => Promise<void>;
} = Object.assign(_sleep, {
	/**
	 * Pause execution for a number of milliseconds.
	 * @param millis Number of milliseconds to pause.
	 */
	millis: _sleep,

	/**
	 * Pause execution for a number of seconds.
	 * @param seconds Number of seconds to pause.
	 */
	seconds: async (seconds: number): Promise<void> => _sleep(seconds * 1000),

	/**
	 * Pause execution for a number of minutes.
	 * @param minutes Number of minutes to pause.
	 */
	minutes: async (minutes: number): Promise<void> => _sleep(minutes * 60_000),

	/**
	 * Pause execution for a number of hours.
	 * @param hours Number of hours to pause.
	 */
	hours: async (hours: number): Promise<void> => _sleep(hours * 3_600_000),

	/**
	 * Pause execution for a number of days.
	 * @param days Number of days to pause.
	 */
	days: async (days: number): Promise<void> => _sleep(days * 86_400_000),
});
