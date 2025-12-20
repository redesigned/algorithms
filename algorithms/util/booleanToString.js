// @ts-check
"use strict";

/**
 * booleanToString
 * Converts a value to the string `"true"` or `"false"`.
 * Useful for conditionally rendering string literals.
 * @param {*} value - The input value to evaluate.
 * @returns {string} `"true"` if truthy, otherwise `"false"`.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function booleanToString(value) {
	return value ? "true" : "false";
}
