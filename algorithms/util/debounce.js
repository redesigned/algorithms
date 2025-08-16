// @ts-check
"use strict";

/**
 * Debounce
 * Ensures a function is executed only after a certain delay has passed
 * since the last time it was invoked. Useful for events that fire in bursts,
 * such as typing or window resizing.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds before invoking the function.
 * @returns {Function} - A new debounced version of the provided function.
 * @complexity O(1) per call (timer reset); overall efficiency depends on event frequency.
 * @author Joshua Jarman
 */
export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}