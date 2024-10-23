/**
 * Pause execution for a number of milliseconds.
 * @param millis Number of milliseconds to pause.
 */
export const sleep = async (millis: number): Promise<void> =>
	new Promise((resolveMe) => setTimeout(resolveMe, millis));

/**
 * Pause execution for a number of milliseconds.
 * @param millis Number of milliseconds to pause.
 */
sleep.millis = sleep;

/**
 * Pause execution for a number of seconds.
 * @param seconds Number of seconds to pause.
 */
sleep.seconds = async (seconds: number): Promise<void> => sleep(seconds * 1000);

/**
 * Pause execution for a number of minutes.
 * @param minutes Number of minutes to pause.
 */
sleep.minutes = async (minutes: number): Promise<void> =>
	sleep(minutes * 60_000);

/**
 * Pause execution for a number of hours.
 * @param hours Number of hours to pause.
 */
sleep.hours = async (hours: number): Promise<void> => sleep(hours * 3_600_000);

/**
 * Pause execution for a number of days.
 * @param days Number of days to pause.
 */
sleep.days = async (days: number): Promise<void> => sleep(days * 86_400_000);
