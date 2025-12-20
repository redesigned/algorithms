// @ts-check
"use strict";

/**
 * emptyIfTrueUndefinedIfFalse
 * Converts a truthy value to an empty string, otherwise returns `undefined`.
 * Useful for conditionally rendering empty attributes.
 * @param {*} value - The input value to evaluate.
 * @returns {""|undefined} Empty string if truthy, otherwise undefined.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function emptyIfTrueUndefinedIfFalse(value) {
	return value ? "" : undefined;
}

/**
 * booleanAttrtibute
 * Converts a truthy value to an empty string, otherwise returns `undefined`.
 * Useful for conditionally rendering HTML attributes like `disabled` or `data-*`.
 * @param {*} value - The input value to evaluate.
 * @returns {""|undefined} Empty string if truthy, otherwise undefined.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function booleanAttrtibute(value) {
	return emptyIfTrueUndefinedIfFalse(value);
}
