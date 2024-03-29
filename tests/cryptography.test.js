import { expect, test } from 'vitest';

/* ## CRYPTOGRAPHY ## */

import { ceasarsCipher } from '../algorithms/cryptography/ceasarsCipher';
test('Cesars Cipher: O(n)', () => {
	expect(ceasarsCipher('')).toBe('');
	expect(ceasarsCipher('Always-Look-on-the-Bright-Side-of-Life', 5)).toBe('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj');
	expect(ceasarsCipher('Call 1-800-555-1212 for Information!', 111)).toBe('Jhss 2-911-666-2323 mvy Pumvythapvu!');
	expect(ceasarsCipher('Jhss 2-911-666-2323 mvy Pumvythapvu!', -111)).toBe('Call 1-800-555-1212 for Information!');
	expect(ceasarsCipher('Nothing Has Changed', 0)).toBe('Nothing Has Changed');
});

import { encodeBase64 } from '../algorithms/cryptography/base64';
test('Encode Base64: O(n)', () => {
	expect(encodeBase64('')).toBe('');
	expect(encodeBase64('hello world')).toBe('aGVsbG8gd29ybGQ=');
	expect(encodeBase64('Call 1-800-555-1212 for Information!')).toBe('Q2FsbCAxLTgwMC01NTUtMTIxMiBmb3IgSW5mb3JtYXRpb24h');
	expect(encodeBase64('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~')).toBe('ISMkJSYoKSorLC0uLzAyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUlNUVVdYWVpeX2BgYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+');
});

import { decodeBase64 } from '../algorithms/cryptography/base64';
test('Decode Base64: O(n)', () => {
	expect(decodeBase64('')).toBe('');
	expect(decodeBase64('aGVsbG8gd29ybGQ=')).toBe('hello world');
	expect(decodeBase64('Q2FsbCAxLTgwMC01NTUtMTIxMiBmb3IgSW5mb3JtYXRpb24h')).toBe('Call 1-800-555-1212 for Information!');
	expect(decodeBase64('ISMkJSYoKSorLC0uLzAyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUlNUVVdYWVpeX2BgYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+')).toBe('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~');
	expect(decodeBase64(encodeBase64('Nothing Has Changed 0123456789'))).toBe('Nothing Has Changed 0123456789');
});

import { md5 } from '../algorithms/cryptography/md5';
test('MD5: O(n)', () => {
	expect(md5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
	expect(md5('hello world')).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
	expect(md5('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~')).toBe('d17620fa6551e412146752c734db90e2');
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

import { rot18 } from '../algorithms/cryptography/rot18';
test('ROT18: O(n)', () => {
	expect(rot18('')).toBe('');
	expect(rot18('The quick brown fox jumps over 13 lazy dogs.')).toBe('Gur dhvpx oebja sbk whzcf bire 68 ynml qbtf.');
	expect(rot18('Gur dhvpx oebja sbk whzcf bire 68 ynml qbtf.')).toBe('The quick brown fox jumps over 13 lazy dogs.');
	expect(rot18('Call 1-800-555-1212 for Information!')).toBe('Pnyy 6-355-000-6767 sbe Vasbezngvba!');
	expect(rot18(rot18('Nothing Has Changed 0123456789'))).toBe('Nothing Has Changed 0123456789');
});

import { rot47 } from '../algorithms/cryptography/rot47';
test('ROT47: O(n)', () => {
	expect(rot47('')).toBe('');
	expect(rot47('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~')).toBe('PRSTUWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{|}~!#$%&()*+/0-1123456789:;<=>?@ABCDEFGHIJKLMNO');
	expect(rot47(rot47('!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\``abcdefghijklmnopqrstuvwxyz{|}~'))).toBe('!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\``abcdefghijklmnopqrstuvwxyz{|}~');
});
