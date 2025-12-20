// @ts-check
"use strict";

/**
 * stringToBoolean
 * Forces any value to be evaluated as a boolean.
 * @param {*} value - The input value to coerce.
 * @returns {boolean} The coerced boolean value.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringToBoolean(value) {
	return !!value;
}
