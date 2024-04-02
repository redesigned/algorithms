// @ts-check
"use strict";

if (typeof window === 'undefined') {
	var window = global;
}

/**
 * Generate AES-GCM Encryption Key
 * Generates an AES-GCM encrption key asynchronously.
 * @returns {Promise<string>} - The base64-encoded key.
 * @author Joshua Jarman
 */
export async function generateAESGCMKey() {
	let new_key = {};
	await crypto.subtle.generateKey(
		{
			name: 'AES-GCM',
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
			throw err;
		});
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
	return await new_key.k;
}

/**
 * Encrypt AES-GCM
 * Encrypts text via AES-GCM encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} secret - A password
 * @param {string} data -The text to encrypt
 * @returns {Promise<string>} - The encrypted text.
 * @author Joshua Jarman
 */
export async function encryptAESGCM(key, secret, data) {
	let encoded_data = '';
	if (secret.length < 1) { secret = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'; };
	secret = new TextEncoder().encode(secret);
	data = new TextEncoder().encode(data);
	await window.crypto.subtle.importKey(
		'jwk',
		{
			kty: 'oct',
			k: key,
			alg: 'A256GCM',
			ext: true,
		},
		{
			name: 'AES-GCM',
		},
		false,
		['encrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.encrypt(
			{
				name: 'AES-GCM',
				iv: secret,
				additionalData: secret,
				tagLength: 128,
			},
			key,
			data
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
 * decrypt AES-GCM
 * Decrypts text via AES-GCM encrption asynchronously.
 * @param {string} key - The base64-encoded encryption key.
 * @param {string} secret - A password
 * @param {string} data -The text to decrypt
 * @returns {Promise<string>} - The decrypted text.
 * @author Joshua Jarman
 */
export async function decryptAESGCM(key, secret, data) {
	let decoded_data = '';
	if (secret.length < 1) { secret = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'; };
	secret = new TextEncoder().encode(secret);
	const binary_string = window.atob(`${decodeURIComponent(data)}`);
	let bytes = new Uint8Array(binary_string.length);
	for (let i = 0; i < binary_string.length; i++){ bytes[i] = binary_string.charCodeAt(i); };
	data = bytes.buffer;
	await window.crypto.subtle.importKey(
		'jwk',
		{
			kty: 'oct',
			k: key,
			alg: 'A256GCM',
			ext: true,
		},
		{
			name: 'AES-GCM',
		},
		false,
		['decrypt']
	)
	.then(async (key) => {
		await window.crypto.subtle.decrypt(
			{
				name: 'AES-GCM',
				iv: secret,
				additionalData: secret,
				tagLength: 128,
			},
			key,
			data
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
