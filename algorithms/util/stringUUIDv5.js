// @ts-check
"use strict";

/**
 * String UUID v5
 * Generates a version 5 UUID (Universally Unique Identifier) based on the provided namespace UUID and domain name following the IETF RFC 4122
 * @param {string} namespaceUUID - The namespace UUID (e.g., a version 3 or 5 UUID).
 * @param {string} domainName - The domain name for which the UUID is generated.
 * @returns {Promise<string>} - A version 5 UUID in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export async function stringUUIDv5(namespaceUUID, domainName) {
	const namespaceBytes = new TextEncoder().encode(namespaceUUID);
	const nameBytes = new TextEncoder().encode(domainName);
	const combinedBytes = new Uint8Array(namespaceBytes.length + nameBytes.length);
	combinedBytes.set(namespaceBytes);
	combinedBytes.set(nameBytes, namespaceBytes.length);
	const hashBuffer = await crypto.subtle.digest('SHA-1', combinedBytes);
	const uuidBytes = new Uint8Array(hashBuffer);
	uuidBytes[6] = (uuidBytes[6] & 0x0f) | 0x50;
	uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80;
	const uuid = Array.from(uuidBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
	return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;
}