/* # Complexity: O(N log log N) */
export function sieveOfEratosthenes(maxNum) {
	const isPrime = new Array(maxNum + 1).fill(true);
	isPrime[0] = false;
	isPrime[1] = false;
	const primes = [];
	for (let num = 2; num <= maxNum; num += 1) {
		if (isPrime[num] === true) {
			primes.push(num);
			let nextNum = num * num;
			while (nextNum <= maxNum) {
			isPrime[nextNum] = false;
			nextNum += num;
			}
		}
	}
	return primes;
}