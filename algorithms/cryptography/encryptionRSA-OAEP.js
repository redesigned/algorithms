// @ts-check
"use strict";

// node compatibility
if (typeof window === 'undefined') {
	var window = global;
}

/**
 * Generate RSA-OAEP Private Key
 * Generates an RSA-OAEP key asynchronously for decryption.
 * @param {number} [length=4096] - The key length.  Must be at least 1024, if less will be set to 1024 automatically.
 * @returns {Promise<String>} The base64-encoded key.
 */
export async function generateRSAOAEPKeyPrivate(length = 4096) {
	if (length < 1024) {
		length = 1024;
	}
	let private_key = {};
	await crypto.subtle.generateKey(
		{
			name: "RSA-OAEP",
			modulusLength: length,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: "SHA-256",
		},
		true,
		['encrypt', 'decrypt']
	)
	.then(async (key) => {
		await crypto.subtle.exportKey(
			'jwk',
			key.privateKey
		)
		.then((keydata) => {
			private_key = keydata;
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
	return await JSON.stringify(private_key);
}

/**
 * Exract RSA-OAEP Public Key
 * Extracts an RSA-OAEP Public Key for encrption from a Private Key.
 * @param {string} privateKey - The base64-encoded encryption key.
 * @returns {string} - The encrypted text.
 * @author Joshua Jarman
 */
export function extractRSAOAEPKeyPublic(privateKey) {
	return JSON.parse(privateKey).n;
}

/**
 * Encrypt RSA-OAEP
 * Encrypts text via RSA-OAEP encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} data -The text to encrypt
 * @returns {Promise<string>} - The encrypted text.
 * @author Joshua Jarman
 */
export async function encryptRSAOAEP(key, data) {
	let encoded_data = '';
	const bufferData = new TextEncoder().encode(data);
	await window.crypto.subtle.importKey(
		'jwk',
		{
			alg: "RSA-OAEP-256",
			e: "AQAB",
			ext: true,
			key_ops: ["encrypt"],
			kty: "RSA",
			n: key
		},
		{
			name: 'RSA-OAEP',
			hash: { name: 'SHA-256' }
		},
		false,
		['encrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.encrypt(
			{
				name: 'RSA-OAEP',
			},
			key,
			bufferData
		)
		.then((encrypted) => {
			let binary = '';
			const bytes = new Uint8Array(encrypted);
			for (let i = 0; i < bytes.byteLength; i++) { binary += String.fromCharCode(bytes[i]); };
			encoded_data = `${encodeURIComponent(window.btoa(binary))}`;
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
	return await encoded_data;
}

/**
 * Decrypt RSA-OAEP
 * Decrypts text via RSA-OAEP encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} data -The text to decrypt
 * @returns {Promise<string>} - The decrypted text.
 * @author Joshua Jarman
 */
export async function decryptRSAOAEP(key, data) {
	let decoded_data = '';
	const binary_string = window.atob(`${decodeURIComponent(data)}`);
	let bytes = new Uint8Array(binary_string.length);
	for (let i = 0; i < binary_string.length; i++){ bytes[i] = binary_string.charCodeAt(i); };
	const bufferData = bytes.buffer;
	await window.crypto.subtle.importKey(
		'jwk',
		JSON.parse(key),
		{
			name: 'RSA-OAEP',
			hash: { name: 'SHA-256' }
		},
		false,
		['decrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.decrypt(
			{
				name: 'RSA-OAEP',
			},
			key,
			bufferData
		)
		.then((decrypted) => {
			decoded_data = new TextDecoder().decode(new Uint8Array(decrypted));
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
	return await decoded_data;
}