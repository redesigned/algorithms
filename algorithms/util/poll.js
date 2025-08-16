// @ts-check
"use strict";

/**
 * Poll
 * Repeatedly calls an asynchronous function until it returns a truthy value
 * or the maximum timeout is reached. Useful for waiting on external resources,
 * APIs, or DOM changes.
 * @template T
 * @param {function(): Promise<T>} fn - The async function to poll. Should resolve to a truthy value when successful.
 * @param {number} interval - How often to call the function, in milliseconds.
 * @param {number} timeout - Maximum total time in milliseconds before rejecting.
 * @returns {Promise<T>} - Resolves with the truthy result, or rejects on timeout.
 * @complexity O(n) where n = number of polling attempts (timeout ÷ interval).
 * @author Joshua Jarman
 */
export async function poll(fn, interval, timeout) {
	const endTime = Date.now() + timeout;
	return new Promise((resolve, reject) => {
		const check = async () => {
			try {
				const result = await fn();
				if (result) {
					return resolve(result);
				}
			} catch (e) {
				// ignore errors, continue polling
			}
			if (Date.now() < endTime) {
				setTimeout(check, interval);
			} else {
				reject(new Error("Polling timed out"));
			}
		};
		check();
	});
}
