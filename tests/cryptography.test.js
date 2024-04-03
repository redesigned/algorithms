import { expect, test } from 'vitest';

/* ## CRYPTOGRAPHY ## */

import { atbash } from '../algorithms/cryptography/atbashCipher';
test('Atbash Cipher: O(n)', () => {
	expect(atbash('')).toBe('');
	expect(atbash('ABCDEFGHIFKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')).toBe('ZYXWVUTSRUPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210');
	expect(atbash('ZYXWVUTSRUPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210')).toBe('ABCDEFGHIFKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
	expect(atbash('Always-Look-on-the-Bright-Side-of-Life')).toBe('Zodzbh-Ollp-lm-gsv-Yirtsg-Hrwv-lu-Oruv');
	expect(atbash(atbash('Nothing Has Changed'))).toBe('Nothing Has Changed');
});

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

import { interleave } from '../algorithms/cryptography/interleave';
test('Interleave: O(n)', () => {
	expect(interleave('')).toBe('');
	expect(interleave('Hello World!')).toBe('HlWleoodl r!');
	expect(interleave('The quick brown fox jumps over 13 lazy dogs.')).toBe('Trm hoplewsa n zq oyufv ioedcxrok  g j1sbu3.');
});

import { deinterleave } from '../algorithms/cryptography/interleave';
test('Denterleave: O(segsize * length)', () => {
	expect(deinterleave('')).toBe('');
	expect(deinterleave('HlWleoodl r!')).toBe('Hello World!');
	expect(deinterleave('Trm hoplewsa n zq oyufv ioedcxrok  g j1sbu3.')).toBe('The quick brown fox jumps over 13 lazy dogs.');
	expect(deinterleave(interleave('Nothing Has Changed 0123456789'))).toBe('Nothing Has Changed 0123456789');
});

import { md5 } from '../algorithms/cryptography/md5';
test('MD5: O(n)', () => {
	expect(md5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
	expect(md5('hello world')).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
	expect(md5('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~')).toBe('d17620fa6551e412146752c734db90e2');
});

import { railFenceEncrypt, railFenceDecrypt } from '../algorithms/cryptography/railFenceCipher';
test('Rail Fence Cipher: O(n)', () => {
	expect(railFenceEncrypt('')).toBe('');
	expect(railFenceEncrypt('Hello World!')).toBe('HloWrdel ol!');
	expect(railFenceEncrypt('Hello World!', 3)).toBe('Horel ol!lWd');
	expect(railFenceEncrypt('Hello World!', 4)).toBe('HWe o!lordll');
	expect(railFenceEncrypt('The quick brown fox jumps over 13 lazy dogs.', 6)).toBe('Tbj oh r ur1dgekoxme3 s cwopv y.qinfsolzu  a');
	expect(railFenceDecrypt('')).toBe('');
	expect(railFenceDecrypt('HloWrdel ol!')).toBe('Hello World!');
	expect(railFenceDecrypt('Horel ol!lWd', 3)).toBe('Hello World!');
	expect(railFenceDecrypt('HWe o!lordll', 4)).toBe('Hello World!');
	expect(railFenceDecrypt('Tbj oh r ur1dgekoxme3 s cwopv y.qinfsolzu  a', 6)).toBe('The quick brown fox jumps over 13 lazy dogs.');
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

import { shiftKeyEncrypt, shiftKeyDecrypt } from '../algorithms/cryptography/shiftKeyCipher';
test('Shift Cipher Encrypt/Decrypt: O(n)', () => {
	expect(shiftKeyEncrypt('', 'SuperSecret')).toBe('');
	expect(shiftKeyDecrypt('', 'SuperSecret')).toBe('');
	expect(shiftKeyEncrypt('Hello World!', 'SuperSecret')).toBe('\x1BZ\\Qas<RdQXt');
	expect(shiftKeyDecrypt('\x1BZ\\Qas<RdQXt', 'SuperSecret')).toBe('Hello World!');
});

import { xOR } from '../algorithms/cryptography/xOR';
test('xOR: O(n)', () => {
	expect(xOR('')).toBe('');
	expect(xOR('Hello World!')).toBe('{V__\\\x13d\\A_W\x12');
	expect(xOR('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~',1024)).toBe('СУФХЦШЩЪЫЬЭЮЯавгдежзийклмнопрстуфхцчшщъыьэюяѐђѓєѕїјљњўџќѠѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾ');
	expect(xOR(xOR('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~'))).toBe('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~');
	expect(xOR(xOR('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~',11),11)).toBe('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~');
	expect(xOR(xOR('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~',1024),1024)).toBe('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_\\``abcdefghijklmnopqrstuvwxyz{|}~');
});

import { xOREncrypt, xORDecrypt } from '../algorithms/cryptography/xOR';
test('xOR Encrypt/Decrypt: O(n)', () => {
	expect(xOREncrypt('', 'Secret Key')).toBe('');
	expect(xORDecrypt('', 'Secret Key')).toBe('');
	expect(xOREncrypt('Hello World!', 'Secret Key')).toBe('GwAPHgpUdyQXFTdE');
	expect(xORDecrypt('GwAPHgpUdyQXFTdE', 'Secret Key')).toBe('Hello World!');
	expect(xOREncrypt('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~', 'Secret Key')).toBe('ckZHV0NcCWFOVX5LTEJXRxR+U05rXFlJWUkedCU4ESYnNyMzaAIvMh8oLT01JnMfMC4LPDksOhRAKgcaNwAFFQ0dSiAJFD0KEwMXB1Q+Ew4rHBkJGQle');
	expect(xORDecrypt('ckZHV0NcCWFOVX5LTEJXRxR+U05rXFlJWUkedCU4ESYnNyMzaAIvMh8oLT01JnMfMC4LPDksOhRAKgcaNwAFFQ0dSiAJFD0KEwMXB1Q+Ew4rHBkJGQle', 'Secret Key')).toBe('!#$%&()*+,-./023456789:;<=>?@ABCDEFGHIJKLMNOPRSTUWXYZ^_``abcdefghijklmnopqrstuvwxyz{|}~');
});

import { vigenereEncrypt, vigenereDecrypt } from '../algorithms/cryptography/vigenereCipher';
test('Vigenère Cipher Encrypt/Decrypt: O(n)', () => {
	expect(vigenereEncrypt('', 'SuperSecret')).toBe('');
	expect(vigenereDecrypt('', 'SuperSecret')).toBe('');
	expect(vigenereEncrypt('Hello World!', 'SuperSecret')).toBe('Zyapf Ostch!');
	expect(vigenereDecrypt('Zyapf Ostch!', 'SuperSecret')).toBe('Hello World!');
});

import { generateAESCBCKey, encryptAESCBC, decryptAESCBC } from '../algorithms/cryptography/encryptionAES-CBC';
test('AES-CBC Encrypt/Decrypt: O???', async () => {
	let key = await generateAESCBCKey();
	let encrypted = await encryptAESCBC(key, 'SecretPassword', 'Hello World!');
	let decrypted = await decryptAESCBC(key, 'SecretPassword', encrypted);
	expect(decrypted).toBe('Hello World!');
});

import { generateAESCTRKey, encryptAESCTR, decryptAESCTR } from '../algorithms/cryptography/encryptionAES-CTR';
test('AES-CTR Encrypt/Decrypt: O???', async () => {
	let key = await generateAESCTRKey();
	let encrypted = await encryptAESCTR(key, 'SecretPassword', 'Hello World!');
	let decrypted = await decryptAESCTR(key, 'SecretPassword', encrypted);
	expect(decrypted).toBe('Hello World!');
});

import { generateAESGCMKey, encryptAESGCM, decryptAESGCM } from '../algorithms/cryptography/encryptionAES-GCM';
test('AES-GCM Encrypt/Decrypt: O???', async () => {
	let key = await generateAESGCMKey();
	let encrypted = await encryptAESGCM(key, 'SecretPassword', 'Hello World!');
	let decrypted = await decryptAESGCM(key, 'SecretPassword', encrypted);
	expect(decrypted).toBe('Hello World!');
});

import { generateRSAOAEPKeyPrivate, extractRSAOAEPKeyPublic, encryptRSAOAEP, decryptRSAOAEP } from '../algorithms/cryptography/encryptionRSA-OAEP';
test('RSA-OAEP Encrypt/Decrypt: O???', async () => {
	let private_key = await generateRSAOAEPKeyPrivate(1024);
	let public_key = await extractRSAOAEPKeyPublic(private_key);
	let encrypted = await encryptRSAOAEP(public_key, 'Hello World!');
	let decrypted = await decryptRSAOAEP(private_key, encrypted);
	expect(decrypted).toBe('Hello World!');
	private_key = await generateRSAOAEPKeyPrivate(2048);
	public_key = await extractRSAOAEPKeyPublic(private_key);
	encrypted = await encryptRSAOAEP(public_key, 'Hello World!');
	decrypted = await decryptRSAOAEP(private_key, encrypted);
	expect(decrypted).toBe('Hello World!');
	private_key = await generateRSAOAEPKeyPrivate(4096);
	public_key = await extractRSAOAEPKeyPublic(private_key);
	encrypted = await encryptRSAOAEP(public_key, 'Hello World!');
	decrypted = await decryptRSAOAEP(private_key, encrypted);
	expect(decrypted).toBe('Hello World!');
});