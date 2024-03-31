// @ts-check
"use strict";

/**
 * String UUID v8
 * Generates a Version 8 UUID (randomly generated UUID) in string format
 * @returns {string} A randomly generated UUID.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringUUIDv8() {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => {
		let r = (dt + Math.random()*16)%16 | 0; dt = Math.floor(dt/16); return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	});
	return uuid;
}
// export function stringUUIDv8() {
// 	return "00000000-0000-0000-0000-000000000000"
// 		.replace(/[0]/g, c => {
// 			const rand = crypto.getRandomValues(new Uint8Array(1))[0];
// 			return (rand & 15).toString(16);
// 		});
// }
