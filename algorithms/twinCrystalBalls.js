/* # Complexity: O(√N) */
export function twinCrystalBalls(arr) {
	const length = arr.length - 1;
	const jump = Math.floor(Math.sqrt(length)) || 1;
	let i = jump;
	for (; i <= length; i += jump) {
		if (arr[i]) {
			break;
		}
	}
	const brokeAt = (i <= length) ? i : length + 1;
	i -= jump;
	for (; i < brokeAt; i++) {
		if (arr[i]) {
			break;
		}
	}
	return (i >= 0 && length >= 0) ? i - 1 : -1;
}