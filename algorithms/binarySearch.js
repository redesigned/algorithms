/* # Complexity: O(N) */
export function binarySearch(arr, target, start = 0, end = arr.length - 1) {
	const middleIndex = Math.floor((start+end)/2);
	const middleValue = arr[middleIndex];
	return (start > end) ? -1
		: (middleValue === target) ? middleIndex
		: (middleValue > target) ? binarySearch(arr, target, start, middleIndex - 1)
		: (middleValue < target) ? binarySearch(arr, target, middleIndex + 1, end)
		: -1;
}