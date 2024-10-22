export const sleep = async (millis: number): Promise<void> =>
	new Promise((resolveMe) => setTimeout(resolveMe, millis));

sleep.millis = sleep;
sleep.seconds = async (seconds: number): Promise<void> => sleep(seconds * 1000);
sleep.minutes = async (minutes: number): Promise<void> =>
	sleep(minutes * 60_000);
sleep.hours = async (hours: number): Promise<void> => sleep(hours * 3_600_000);
sleep.days = async (days: number): Promise<void> => sleep(days * 86_400_000);
