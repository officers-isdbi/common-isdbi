export function fillArrayToLength<T>(arr: T[], targetLength: number, slice = false): T[] {
	if (arr.length === 0 || targetLength <= 0) return [];

	const result: T[] = [];
	while (result.length < targetLength) {
		result.push(...arr);
	}

	return slice ? result.slice(0, targetLength) : result;
}
