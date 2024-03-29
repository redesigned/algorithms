import { expect, test } from 'vitest';

/* ## CRYPTOGRAPHY ## */

import { ceasarsCipher } from '../algorithms/cryptography/ceasarsCipher';
test('CesarsCipher: O(n)', () => {
	expect(ceasarsCipher('')).toBe('');
	expect(ceasarsCipher('Always-Look-on-the-Bright-Side-of-Life', 5)).toBe('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj');
	expect(ceasarsCipher('Call 1-800-555-1212 for Information!', 111)).toBe('Jhss 2-911-666-2323 mvy Pumvythapvu!');
	expect(ceasarsCipher('Jhss 2-911-666-2323 mvy Pumvythapvu!', -111)).toBe('Call 1-800-555-1212 for Information!');
	expect(ceasarsCipher('Nothing Has Changed', 0)).toBe('Nothing Has Changed');
});