// @ts-check
"use strict";

/**
 * Generate AES-GCM Encryption Key
 * Generates an AES-GCM key asynchronously.
 * @returns {Promise<string>} The base64-encoded key.
 */
export async function generateAESGCMKey() {
	let new_key = {};
	await window.crypto.subtle.generateKey(
		{
			name: 'AES-GCM',
			length: 256,
		},
		true,
		['encrypt', 'decrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.exportKey(
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

