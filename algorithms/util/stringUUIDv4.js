// @ts-check
"use strict";

/**
 * String UUID v4
 * Generates a Version 4 UUID (randomly generated UUID) in string format following the IETF RFC 4122
 * @returns {string} A randomly generated UUID.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringUUIDv4() {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		let r = (dt + Math.random()*16)%16 | 0; dt = Math.floor(dt/16); return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	});
	return uuid;
}
