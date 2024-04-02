// @ts-check
"use strict";

// node compatibility
if (typeof window === 'undefined') {
	var window = global;
}

/**
 * Generate AES-CBC Encryption Key
 * Generates an AES-CBC key asynchronously.
 * @returns {Promise<string>} The base64-encoded key.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export async function generateAESCBCKey() {
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

/**
 * Encrypt AES-CBC
 * Encrypts text via AES-CBC encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} secret - A password
 * @param {string} data -The text to encrypt
 * @returns {Promise<string>} - The encrypted text.
 * @complexity O???
 * @author Joshua Jarman
 */
export async function encryptAESCBC(key, secret, data) {
	let encoded_data = '';
	if (secret.length < 1) { secret = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'; };
	const bufferSecret = new TextEncoder().encode(secret.slice(0, 16).padStart(16, " "));
	const bufferData = new TextEncoder().encode(data);
	await window.crypto.subtle.importKey(
		'jwk',
		{
			kty: 'oct',
			k: key,
			alg: 'A256CBC',
			ext: true,
		},
		{
			name: 'AES-CBC',
		},
		false,
		['encrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.encrypt(
			{
				name: 'AES-CBC',
				iv: bufferSecret,
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
 * decrypt AES-CBC
 * Decrypts text via AES-GCM encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} secret - A password
 * @param {string} data -The text to decrypt
 * @returns {Promise<string>} - The decrypted text.
 * @complexity O???
 * @author Joshua Jarman
 */
export async function decryptAESCBC(key, secret, data) {
	let decoded_data = '';
	if (secret.length < 1) { secret = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'; };
	const bufferSecret = new TextEncoder().encode(secret.slice(0, 16).padStart(16, " "));
	const binary_string = window.atob(`${decodeURIComponent(data)}`);
	let bytes = new Uint8Array(binary_string.length);
	for (let i = 0; i < binary_string.length; i++){ bytes[i] = binary_string.charCodeAt(i); };
	const bufferData = bytes.buffer;
	await window.crypto.subtle.importKey(
		'jwk',
		{
			kty: 'oct',
			k: key,
			alg: 'A256CBC',
			ext: true,
		},
		{
			name: 'AES-CBC',
		},
		false,
		['decrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.decrypt(
			{
				name: 'AES-CBC',
				iv: bufferSecret,
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
