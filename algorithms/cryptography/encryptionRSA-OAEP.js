// @ts-check
"use strict";

/**
 * Generate RSA-OAEP Encryption Key
 * Generates an RSA-OAEP key asynchronously.
 * @returns {Promise<Object>} The base64-encoded key.
 */
export async function generateRSAOAEPKeys() {
	let encryption_key = {};
	let decryption_key = {};
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
		console.log(key.publicKey);
		console.log(key.privateKey);
		await crypto.subtle.exportKey(
			'jwk',
			key.publicKey
		)
		.then((keydata) => {
			encryption_key = keydata;
		})
		.catch((err) => {
			console.error(err);
		});
		await crypto.subtle.exportKey(
			'pkcs8',
			key.privateKey
		)
		.then((key2data) => {
			decryption_key = window.btoa(escape(String.fromCharCode.apply(null, new Uint8Array(key2data))));
		})
		.catch((err) => {
			console.error(err);
		});
	})
	.catch((err) => {
		console.error(err);
	});
	console.log(encryption_key.n);
	console.log(decryption_key);
	return await {
		encryption: encryption_key.n,
		decryption: decryption_key
	}
}

/**
 * Generate RSA-OAEP Decryption Key
 * Generates an RSA-OAEP key asynchronously.
 * @returns {Promise<string>} The base64-encoded key.
 */
export async function generateRSAOAEPKeyDecryption() {
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
			key.privateKey
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
	data = new TextEncoder().encode(data);
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

// /**
//  * decrypt AES-GCM
//  * Decrypts text via AES-GCM encrption asynchronously.
//  * @param {string} key - The base64-encoded encryption key.
//  * @param {string} secret - A password
//  * @param {string} data -The text to decrypt
//  * @returns {Promise<string>} - The decrypted text.
//  * @author Joshua Jarman
//  */
// export async function decryptAESGCM(key, secret, data) {
// 	let decoded_data = '';
// 	if (secret.length < 1) { secret = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'; };
// 	secret = new TextEncoder().encode(secret);
// 	const binary_string = window.atob(`${decodeURIComponent(data)}`);
// 	let bytes = new Uint8Array(binary_string.length);
// 	for (let i = 0; i < binary_string.length; i++){ bytes[i] = binary_string.charCodeAt(i); };
// 	data = bytes.buffer;
// 	await window.crypto.subtle.importKey(
// 		'jwk',
// 		{
// 			kty: 'oct',
// 			k: key,
// 			alg: 'A256GCM',
// 			ext: true,
// 		},
// 		{
// 			name: 'AES-GCM',
// 		},
// 		false,
// 		['decrypt']
// 	)
// 	.then(async (key) => {
// 		await window.crypto.subtle.decrypt(
// 			{
// 				name: 'AES-GCM',
// 				iv: secret,
// 				additionalData: secret,
// 				tagLength: 128,
// 			},
// 			key,
// 			data
// 		)
// 		.then((decrypted) => {
// 			decoded_data = new TextDecoder().decode(new Uint8Array(decrypted));
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			throw err;
// 		});
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 		throw err;
// 	});
// 	return await decoded_data;
// }


// {
//     "alg": "RSA-OAEP-256",
//     "e": "AQAB",
//     "ext": true,
//     "key_ops": [
//         "encrypt"
//     ],
//     "kty": "RSA",
//     "n": "uF-FLt9VThjQJxbMVdo7lQAZlTv7e62qsAZb80FfdnfwoNuvP-CMsyQNuF14lxRwJ44BoK1a-UGiEm1uNtN7Hrityf3zq2ijHXz9gJYswN4FWqf5sWymIh1jjQKa_HHYcNjqcP_fTDa07ltJ_wugHRKrgUkGcM93mltIMUD0VeyAEgi390emgNU2wv0MzHq0bkLBisbR4g495bMtOebxflafGZofZsI56bGimYEk34KX49fGq5Aw5SVziFc5YNwGmHYs889jv113wgEff8KPA0I0c_3HSKwRm3IHkelAqfSCzMBgWdtScuwOjjKcW9yoPQ3z6G3jryNcRMkCGMzaPn1nyvsaCPP5d1SrfQoKdeD2tFmuDr4G-SF7f6OXECuMQcu0MF2E8bgfHClFeRDdTO9AWQHbPK_cl9s8mK3r6vONQe_kpv_9qRsVTk5eQC7gKJMAggHuOCP7Tmi0waU1BiR10nbDR263_i2601U6OUrh9tNKRNBF3qxGBcuV6d0STziAEVOT5OfhTP4tbso21GYyw2Rv_xbBjbK25UAGWOxm2X2hm8DHeYalGrOMG9_KiuwH_5Qs-MBLHPZ0MTpeInPc3fjudteGpKb1wxDOYyL6VpQ0eLVI0-wsERRssN1MQWztlrsw8O2m5Oqjsh5C-aXXmVW4Qn3RIkxkx5MCMu8"
// }