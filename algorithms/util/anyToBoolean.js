// @ts-check
"use strict";

/**
 * anyToBoolean
 * Forces any value to be evaluated as a boolean.
 * @param {*} value - The input value to coerce.
 * @returns {boolean} The coerced boolean value.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function anyToBoolean(value) {
	return !!value;
}
