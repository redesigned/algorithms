// @ts-check
"use strict";

/**
 * Generate AES-CTR Encryption Key
 * Generates an AES-CTR key asynchronously.
 * @returns {Promise<string>} The base64-encoded key.
 */
export async function generateAESCTRKey() {
	let new_key = {};
	await crypto.subtle.generateKey(
		{
			name: 'AES-CBC',
			length: 256,
		},
		true,
		['encrypt', 'decrypt']
	)
	.then(async (key) => {
		await crypto.subtle.exportKey(
			'jwk',
			key
		)
		.then((keydata) => {
			new_key = keydata;
		})
		.catch((err) => {
			console.error(err);
		});
	})
	.catch((err) => {
		console.error(err);
	});
	return await new_key.k;
}
