// @ts-check
"use strict";

/**
 * Generate RSA-OAEP Encryption Key
 * Generates an RSA-OAEP key asynchronously.
 * @returns {Promise<string>} The base64-encoded key.
 */
export async function generateRSAOAEPKey() {
	let new_key = {};
	await crypto.subtle.generateKey(
		{
			name: "RSA-OAEP",
			modulusLength: 4096,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: "SHA-256",
		},
		true,
		['encrypt', 'decrypt']
	)
	.then(async (key) => {
		await crypto.subtle.exportKey(
			'jwk',
			key.publicKey
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
	return await new_key.n;
}

