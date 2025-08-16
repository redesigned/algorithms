// @ts-check
"use strict";

/**
 * Throttle
 * Ensures a function is executed at most once every specified interval.
 * Useful for rate-limiting continuous events such as scrolling or mouse movement.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The minimum time interval (ms) between function calls.
 * @returns {Function} - A new throttled version of the provided function.
 * @complexity O(1) per call (simple flag and timer check); overall efficiency depends on event frequency.
 * @author Joshua Jarman
 */
export function throttle(func, limit) {
	let inThrottle = false;
	return function (...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}