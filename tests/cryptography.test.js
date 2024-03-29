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

import { rot5 } from '../algorithms/cryptography/rot5';
test('ROT13: O(n)', () => {
	expect(rot5('')).toBe('');
	expect(rot5('0123456789')).toBe('5678901234');
	expect(rot5('Call 1-800-555-1212 for Information!')).toBe('Call 6-355-000-6767 for Information!');
	expect(rot5(rot5('0123456789'))).toBe('0123456789');
});

import { rot13 } from '../algorithms/cryptography/rot13';
test('ROT13: O(n)', () => {
	expect(rot13('')).toBe('');
	expect(rot13('The quick brown fox jumps over 13 lazy dogs.')).toBe('Gur dhvpx oebja sbk whzcf bire 13 ynml qbtf.');
	expect(rot13('Gur dhvpx oebja sbk whzcf bire 13 ynml qbtf.')).toBe('The quick brown fox jumps over 13 lazy dogs.');
	expect(rot13('Call 1-800-555-1212 for Information!')).toBe('Pnyy 1-800-555-1212 sbe Vasbezngvba!');
	expect(rot13(rot13('Nothing Has Changed'))).toBe('Nothing Has Changed');
});
