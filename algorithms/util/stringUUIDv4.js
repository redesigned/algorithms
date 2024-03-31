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
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => {
		let r = (dt + Math.random()*16)%16 | 0; dt = Math.floor(dt/16); return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	}).replace(/[y]/g, () => {
		return ['8', '9', 'a', 'b'][Math.floor(Math.random() * 4)];
	});
	return uuid;
}
// export function stringUUIDv4() {
// 	return "10000000-1000-Y000-Z000-100000000000"
// 		.replace(/[018Y]/g, c => {
// 			if (c === 'Y') return '4';
// 			const rand = crypto.getRandomValues(new Uint8Array(1))[0];
// 			return (rand & 15).toString(16);
// 		})
// 		.replace(/[Z]/, () => {
// 			const validDigits = ['8', '9', 'a', 'b'];
// 			const randIndex = crypto.getRandomValues(new Uint8Array(1))[0] & 3;
// 			return validDigits[randIndex];
// 		});
// }