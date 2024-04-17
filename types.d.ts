/**
 * Atbash Cipher Encrypts or decrypts a given string using the Atabash cipher.  Use again to decrypt.  Letters and numbers are swapped with their opposites A=Z a=z 0=9 etc.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Atabash Cipher.
 * @author Joshua Jarman
 */
declare function atbash(str: string): string;

/**
 * Encode Base64 Encodes a string to Base64.
 * @param str - The input string to encode.
 * @returns The Base64-encoded string.
 * @author Joshua Jarman
 */
declare function encodeBase64(str: string): string;

/**
 * Decode Base64 Decodes a string from Base64.
 * @param str - The input string to decode.
 * @returns The Base64-decoded string.
 * @author Joshua Jarman
 */
declare function decodeBase64(str: string): string;

/**
 * Braille Converts a string to or from Braille. Strips all characters not letters, numbers, or common puncuation.
 * @param str - The input string to be transformed.
 * @param enc - Whether we should encode or decode.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function brailleConverter(str?: string, enc?: boolean): string;

/**
 * Braille Encode Converts a string to Braillee. Strips all characters not letters, numbers, or common punctuation.
 * @param str - The input string to be transformed.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function brailleEncode(str?: string): string;

/**
 * Braille Decode Converts a string from Braillee.
 * @param str - The input string to be transformed.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function brailleDecode(str?: string): string;

/**
 * Cesars Cipher Encrypts or decrypts a given string using the Caesar cipher.  Use the negative of the value used to encrypt to decrypt.
 * @param str - The input string to be transformed.
 * @param offset - The offset value for the cipher (defaults to 0).
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function ceasarsCipher(str: string, offset?: number): string;

/**
 * Generate AES-CBC Encryption Key Generates an AES-CBC key asynchronously.
 * @returns The base64-encoded key.
 * @author Joshua Jarman
 */
declare function generateAESCBCKey(): Promise<string>;

/**
 * Encrypt AES-CBC Encrypts text via AES-CBC encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to encrypt
 * @returns - The encrypted text.
 * @author Joshua Jarman
 */
declare function encryptAESCBC(key: string, secret: string, data: string): Promise<string>;

/**
 * decrypt AES-CBC Decrypts text via AES-GCM encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to decrypt
 * @returns - The decrypted text.
 * @author Joshua Jarman
 */
declare function decryptAESCBC(key: string, secret: string, data: string): Promise<string>;

/**
 * Generate AES-CTR Encryption Key Generates an AES-CTR key asynchronously.
 * @returns The base64-encoded key.
 * @author Joshua Jarman
 */
declare function generateAESCTRKey(): Promise<string>;

/**
 * Encrypt AES-CTR Encrypts text via AES-CTR encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to encrypt
 * @returns - The encrypted text.
 * @author Joshua Jarman
 */
declare function encryptAESCTR(key: string, secret: string, data: string): Promise<string>;

/**
 * decrypt AES-CTR Decrypts text via AES-CTR encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to decrypt
 * @returns - The decrypted text.
 * @author Joshua Jarman
 */
declare function decryptAESCTR(key: string, secret: string, data: string): Promise<string>;

/**
 * Generate AES-GCM Encryption Key Generates an AES-GCM encrption key asynchronously.
 * @returns - The base64-encoded key.
 * @author Joshua Jarman
 */
declare function generateAESGCMKey(): Promise<string>;

/**
 * Encrypt AES-GCM Encrypts text via AES-GCM encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to encrypt
 * @returns - The encrypted text.
 * @author Joshua Jarman
 */
declare function encryptAESGCM(key: string, secret: string, data: string): Promise<string>;

/**
 * decrypt AES-GCM Decrypts text via AES-GCM encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param secret - A password
 * @param data -The text to decrypt
 * @returns - The decrypted text.
 * @author Joshua Jarman
 */
declare function decryptAESGCM(key: string, secret: string, data: string): Promise<string>;

/**
 * Generate RSA-OAEP Private Key Generates an RSA-OAEP key asynchronously for decryption.
 * @param length - The key length.  Must be at least 1024, if less will be set to 1024 automatically.
 * @returns The base64-encoded key.
 */
declare function generateRSAOAEPKeyPrivate(length?: number): Promise<String>;

/**
 * Exract RSA-OAEP Public Key Extracts an RSA-OAEP Public Key for encrption from a Private Key.
 * @param privateKey - The base64-encoded encryption key.
 * @returns - The encrypted text.
 * @author Joshua Jarman
 */
declare function extractRSAOAEPKeyPublic(privateKey: string): string;

/**
 * Encrypt RSA-OAEP Encrypts text via RSA-OAEP encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param data -The text to encrypt
 * @returns - The encrypted text.
 * @author Joshua Jarman
 */
declare function encryptRSAOAEP(key: string, data: string): Promise<string>;

/**
 * Decrypt RSA-OAEP Decrypts text via RSA-OAEP encrption asynchronously.
 * @param key - The base64-encoded encryption key.
 * @param data -The text to decrypt
 * @returns - The decrypted text.
 * @author Joshua Jarman
 */
declare function decryptRSAOAEP(key: string, data: string): Promise<string>;

/**
 * Interleave Interleaves characters from the input.
 * @param str - The input string to be interleaved.
 * @param segments - The number of segments to create.
 * @returns - The interleaved string.
 * @author Joshua Jarman
 */
declare function interleave(str?: string, segments?: number): string;

/**
 * Deinterlave Deinterleaves characters from the input string.
 * @param str - The input string to be deinterleaved.
 * @param segments - The number of segments to create.
 * @returns - The deinterleaved string.
 * @author Joshua Jarman
 */
declare function deinterleave(str?: string, segments?: number): string;

/**
 * Processes a block of input data for MD5 hashing.
 * @param x - An array of 16 32-bit integers representing the current state.
 * @param k - An array of 64 32-bit integers representing the input block.
 */
declare function md5cycle(x: number[], k: number[]): void;

/**
 * Performs a common operation on the input values.
 * @param q - A number.
 * @param a - First operand.
 * @param b - Second operand.
 * @param x - Third operand.
 * @param s - Shift value.
 * @param t - Fourth operand.
 * @returns - Result of the operation.
 */
declare function cmn(q: number, a: number, b: number, x: number, s: number, t: number): number;

/**
 * Applies the FF function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the FF function.
 */
declare function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the GG function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the GG function.
 */
declare function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the HH function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the HH function.
 */
declare function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the II function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the II function.
 */
declare function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Computes the MD5 hash of the input string.
 * @param s - The input string.
 * @returns - The MD5 hash state (array of four 32-bit integers).
 */
declare function md51(s: string): number[];

/**
 * Processes a block of input data for MD5 hashing.
 * @param s - The input block (64 characters).
 * @returns - An array of 16 32-bit integers representing the processed block.
 */
declare function md5blk(s: string): number[];

/**
 * Converts a 32-bit integer to a hexadecimal string.
 * @param n - The input integer.
 * @returns - The hexadecimal representation.
 */
declare function rhex(n: number): string;

/**
 * Converts an array of 32-bit integers to a concatenated hexadecimal string.
 * @param x - The array of integers.
 * @returns - The concatenated hexadecimal string.
 */
declare function hex(x: number[]): string;

/**
 * Computes the MD5 hash of the input string.
 * @param str - The input string.
 * @returns - The MD5 hash.
 */
declare function md5(str: string): string;

/**
 * Adds two 32-bit integers.
 * @param a - First operand.
 * @param b - Second operand.
 * @returns - Sum of the two integers.
 */
declare function add32(a: number, b: number): number;

/**
 * Morse Code Converts a string to or from Morse Code. Strips all characters not letters, numbers, or .,?/@ and converts to uppercase.
 * @param str - The input string to be transformed.
 * @param enc - Whether we should encode or decode.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function morseCode(str?: string, enc?: boolean): string;

/**
 * Morse Code Encode Converts a string to Morse Code. Strips all characters not letters, numbers, or .,?/@ and converts to uppercase.
 * @param str - The input string to be transformed.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function morseCodeEncode(str?: string): string;

/**
 * Morse Code Decode Converts a string from Morse Code.
 * @param str - The input string to be transformed.
 * @returns - The transformed string
 * @author Joshua Jarman
 */
declare function morseCodeDecode(str?: string): string;

/**
 * Rail Fence Cipher Encrypt Encrypts a string using the Rail Fence Cipher
 * @param text - The input string to be ciphered.
 * @param key - The number of rails to create.
 * @returns - The encrypted message string.
 * @author Joshua Jarman
 */
declare function railFenceEncrypt(text?: string, key?: number): string;

/**
 * Rail Fence Cipher Decrypt Decrypts a string using the Rail Fence Cipher
 * @param cipher - The input string to be unciphered.
 * @param key - The number of rails to create.
 * @returns - The decrypted message string.
 * @author Joshua Jarman
 */
declare function railFenceDecrypt(cipher?: string, key?: number): string;

/**
 * ROT13 Encrypts or decrypts letters in a given string using the rot13 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot13(str: string): string;

/**
 * ROT18 Encrypts or decrypts letters and numbers in a given string using the rot18 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot18(str: string): string;

/**
 * ROT47 Encrypts or decrypts all ASCII characters in a given string using the rot47 cipher.  Use again to decrypt. Note that the \ character needs to be escaped in the string passed into the fucntion due to limitations with javascript string escaping.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot47(str: string): string;

/**
 * ROT5 Encrypts or decrypts numbers in a given string using the rot5 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot5(str: string): string;

/**
 * Shift Key Cipher Encrypt Encrypts a message using the Shift Key Cipher .
 * @param str - The input message to be encrypted.
 * @param key - The keyword for the Shift Key Cipher .
 * @returns The resulting encrypted message.
 * @author Joshua Jarman
 */
declare function shiftKeyEncrypt(str: string, key?: string): string;

/**
 * Shift Key Cipher Decrypt Encrypts a message using the Shift Key Cipher .
 * @param str - The input message to be decrypted.
 * @param key - The keyword for the Shift KeyCipher .
 * @returns The resulting decrypted message.
 * @author Joshua Jarman
 */
declare function shiftKeyDecrypt(str: string, key?: string): string;

/**
 * Vigenère Cipher Encrypts or decrypts a message using the Vigenère cipher.
 * @param message - The input message to be encrypted or decrypted.
 * @param keyword - The keyword for the Vigenère cipher.
 * @param shift - The shift value for encryption (positive) or decryption (negative).
 * @returns The resulting encrypted or decrypted message.
 * @author Joshua Jarman
 */
declare function vigenere(message: string, keyword?: string, shift?: number): string;

/**
 * Vigenere Encrypt Encrypts a message using the Vigenère cipher.
 * @param message - The input message to be encrypted.
 * @param keyword - The keyword for the Vigenère cipher.
 * @returns The resulting encrypted message.
 * @author Joshua Jarman
 */
declare function vigenereEncrypt(message: string, keyword?: string): string;

/**
 * Vigenere Decrypt Decrypts a message using the Vigenère cipher.
 * @param message - The input message to be decrypted.
 * @param keyword - The keyword for the Vigenère cipher.
 * @returns The resulting decrypted message.
 * @author Joshua Jarman
 */
declare function vigenereDecrypt(message: string, keyword?: string): string;

/**
 * xOR Encodes a string using XOR operation with a given key.
 * @param str - The input string to be encoded.
 * @param key - The XOR key (default is 51).
 * @returns - The encoded string.
 * @author Joshua Jarman
 */
declare function xOR(str?: string, key?: number): string;

/**
 * xOR Encrypt Encrypts a string using xOR operation with a given key.
 * @param input - The input string to be encoded.
 * @param key - The XOR key (default is 'TopSecret123!').
 * @returns - The encoded string.
 * @author Joshua Jarman
 */
declare function xOREncrypt(input?: string, key?: string): string;

/**
 * xOR Decrypt Decrypts a string using xOR operation with a given key.
 * @param input - The input string to be decoded.
 * @param key - The XOR key (default is 'TopSecret123!').
 * @returns - The encoded string.
 * @author Joshua Jarman
 */
declare function xORDecrypt(input?: string, key?: string): string;

/**
 * Queue
 * Represents a queue data structure.
 */
declare class Queue {
    /**
     * Queue Represents a queue data structure.
     * @author Joshua Jarman
     */
    constructor();

    /**
     * enqueue Adds an element to the back of the queue.
     * @param element - The element to enqueue.
     * @returns
     */
    enqueue(element: any): void;

    /**
     * dequeue Removes and returns the front element from the queue.
     * @returns - The dequeued element, or undefined if the queue is empty.
     */
    dequeue(): any;

    /**
     * peek Returns the front element without removing it from the queue.
     * @returns - The front element, or undefined if the queue is empty.
     */
    peek(): any;

    /**
     * length Gets the current length of the queue.
     */
    length: number;

    /**
     * isEmpty Checks if the queue is empty.
     */
    isEmpty: boolean;

}

declare module 'Queue' {
}

/**
 * Stack
 * Represents a stack data structure.
 */
declare class Stack {
    /**
     * Stack Represents a stack data structure.
     * @author Joshua Jarman
     */
    constructor();

    /**
     * push Adds an element to the top of the stack.
     * @param element - The element to push onto the stack.
     * @returns
     */
    push(element: any): void;

    /**
     * pop Removes and returns the element from the top of the stack.
     * @returns - The element, or undefined if the stack is empty.
     */
    pop(): any;

    /**
     * peek Returns the top element without removing it from the stack.
     * @returns - The front element, or undefined if the stack is empty.
     */
    peek(): any;

    /**
     * length Gets the current length of the stack.
     */
    length: number;

    /**
     * isEmpty Checks if the stack is empty.
     */
    isEmpty: boolean;

}

declare module 'Stack' {
}

/**
 * Babylonian Square Root Calculates the square root of a number using the Babylonian method.
 * @param n - The input number.
 * @returns - The square root of the input number (rounded to 6 decimal places).
 * @author Joshua Jarman
 */
declare function babylonianSquareRoot(n: number): number;

/**
 * Circle: Area To Circumference (C = 2√(Aπ))
 * @param area - The Area
 * @returns - The Circumference
 * @author Joshua Jarman
 */
declare function circleAreaToCircumference(area: number): number;

/**
 * Area To Diameter (d = 2√(A/π))
 * @param area - The Area
 * @returns - The Diameter
 * @author Joshua Jarman
 */
declare function circleAreaToDiameter(area: number): number;

/**
 * Area To Radius (r = √(A/π))
 * @param area - The Area
 * @returns - The Radius
 * @author Joshua Jarman
 */
declare function circleAreaToRadius(area: number): number;

/**
 * Circumference To Area (A = π * (C/2π)²) Circumference To Area (A = C²/4π)
 * @param circumference - The Circumference
 * @returns - The Area
 * @author Joshua Jarman
 */
declare function circleCircumferenceToArea(circumference: number): number;

/**
 * Circle: Circumference To Diameter (d = C/π)
 * @param circumference - The Circumference
 * @returns - The Diameter
 * @author Joshua Jarman
 */
declare function circleCircumferenceToDiameter(circumference: number): number;

/**
 * Circumference To Radius (r = C/2π)
 * @param circumference - The Circumference
 * @returns - The Radius
 * @author Joshua Jarman
 */
declare function circleCircumferenceToRadius(circumference: number): number;

/**
 * Diameter To Area (A = πd²/4)
 * @param diameter - The Diameter
 * @returns - The Area
 * @author Joshua Jarman
 */
declare function circleDiameterToArea(diameter: number): number;

/**
 * Diameter To Circumference (C = πd)
 * @param diameter - The Diameter
 * @returns - The Circumference
 * @author Joshua Jarman
 */
declare function circleDiameterToCircumference(diameter: number): number;

/**
 * Circle: Diameter To Radius (r = d/2)
 * @param diameter - The Diameter
 * @returns - The Radius
 * @author Joshua Jarman
 */
declare function circleDiameterToRadius(diameter: number): number;

/**
 * Circle: Radius To Area (A = πr²)
 * @param radius - The Radius
 * @returns - The Area
 * @author Joshua Jarman
 */
declare function circleRadiusToArea(radius: number): number;

/**
 * Circle: Radius To Circimfernce (C = 2πr)
 * @param radius - The Radius
 * @returns - The Circimfernce
 * @author Joshua Jarman
 */
declare function circleRadiusToCircumference(radius: number): number;

/**
 * Circle: Radius To Diameter (d = 2r)
 * @param radius - The Radius
 * @returns - The Diameter
 * @author Joshua Jarman
 */
declare function circleRadiusToDiameter(radius: number): number;

/**
 * Fake Pi Returns Pi up to 1000000 decimal places from proven pi calculation for testing Pi generation functions
 * @param n - The number of terms to use.
 * @returns - The value of pi as a string.
 * @throws - Throws an error if n exceeds 1,000,000.
 * @author Joshua Jarman
 */
declare function fakePi(n: number): string;

/**
 * Fibonacci Numbers Generates the Fibonacci numbers up to a given limit.
 * @param limit - The maximum value for the Fibonacci numbers.
 * @returns - An array of Fibonacci numbers.
 * @author Joshua Jarman
 */
declare function fibonacciNumbers(limit: number): number[];

/**
 * Is Prime Checks if a number is prime
 * @param num - the number to check for prime
 * @returns - Boolean if prime is true or false
 * @author Joshua Jarman
 */
declare function isPrime(num: number): boolean;

/**
 * Newtons Square Root Calculates the square root of the number with given tolerance (precision) by using Newton's method.
 * @param number - the number we want to find a square root of.
 * @param tolerance - how many precise numbers after the floating point we want to get.
 * @author Joshua Jarman
 */
declare function newtonsSquareRoot(number: any, tolerance?: any): number;

/**
 * Sieve of Eratosthenes Generates an array of prime numbers using the Sieve of Eratosthenes algorithm.
 * @param maxNum - The maximum number up to which to find prime numbers.
 * @returns - An array containing prime numbers up to 'maxNum'.
 * @author Joshua Jarman
 */
declare function sieveOfEratosthenes(maxNum: number): number[];

/**
 * Sphere: Circumference to Volume (V = (4/3)π(C/2π)³)
 * @param circumference - The Circumference
 * @returns - The Volume
 * @author Joshua Jarman
 */
declare function sphereCircumferenceToVolume(circumference: number): number;

/**
 * Sphere: Diameter to Volume (V = (1/6)πd³)
 * @param diameter - The Diameter
 * @returns - The Volume
 * @author Joshua Jarman
 */
declare function sphereDiameterToVolume(diameter: number): number;

/**
 * Sphere: Radius to Volume (V = (4/3)πr³)
 * @param radius - The Radius
 * @returns - The Volume
 * @author Joshua Jarman
 */
declare function sphereRadiusToVolume(radius: number): number;

/**
 * Sphere: Volume to Circumference (C = 2π(³√(3V /4π)))
 * @param volume - The Volume
 * @returns - The Circumference
 * @author Joshua Jarman
 */
declare function sphereVolumeToCircumference(volume: number): number;

/**
 * Sphere: Volume to Diameter (d = )
 * @param volume - The Volume
 * @returns - The Diameter
 * @author Joshua Jarman
 */
declare function sphereVolumetoDiameter(volume: number): number;

/**
 * Sphere: Volume to Radius (r = )
 * @param volume - The Volume
 * @returns - The Radius
 * @author Joshua Jarman
 */
declare function sphereVolumeToRadius(volume: number): number;

/**
 * Dijkstra Maze Solver Solves a maze using Dijkstra's algorithm to find the shortest path through a maze, returns -1 if no path can be found.
 * @param maze - The maze to be solved, represented as a 2D array of strings.
 * @param wallChar - The character that represents a wall in the maze.
 * @param startChar - The character that represents the start point in the maze.
 * @param endChar - The character that represents the end point in the maze.
 * @returns - The path from start to end as an array of coordinates, or -1 if no solution exists.
 * @author Joshua Jarman
 */
declare function dijkstraMazeSolver(maze: (string[])[], wallChar: string, startChar: string, endChar: string): (number[])[] | number;

/**
 * Twin Crystal Balls Finds the index of the first true value in the array using a jump search approach.
 * @param arr - The array to search.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function twinCrystalBalls(arr: boolean[]): number;

/**
 * Binary Search Performs binary search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function binarySearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Fibonacci Search Performs a Fibonacci search on a sorted array.
 * @param arr - The sorted array to search.
 * @param target - The target value to find.
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function fibonacciSearch(arr: number[], target: number): number;

/**
 * Interpolation Search Performs interpolation search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function interpolationSearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Javascript Search Performs default indexOf search on an array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function javascriptSearch(arr: any[], target: any): number;

/**
 * Jump Search Performs Jump search on a sorted array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function jumpSearch(arr: any[], target: any): number;

/**
 * Linear Search Performs linear search on a n array to find the index of a target value.
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function linearSearch(arr: any[], target: any): number;

/**
 * Bubble Sort Repeatedly compares adjacent elements and swaps them if they’re in the wrong order.
 * @param arr - The array to be sorted.
 * @returns - The sorted array.
 * @author Joshua Jarman
 */
declare function bubbleSort(arr: number[]): number[];

/**
 * Bubble Sort Non Mutating Copies the array and calls Bubble Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function bubbleSortNonMutating(arr: number[]): number[];

/**
 * Bucket Sort Non Mutating Distributes elements into buckets and sorts each bucket individually.
 * @param arr - The input array to be sorted.
 * @param size - The size of each bucket (optional, default is 5).
 * @returns - The sorted array.
 * @author Joshua Jarman
 */
declare function bucketSortNonMutating(arr: number[], size?: number): number[];

/**
 * Bucket Sort Mutates the original array with the results from the Non Mutating Bucket Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function bucketSort(arr: any[]): any[];

/**
 * Comb Sort Similar to bubble sort but with a larger gap between compared elements, which reduces the number of swaps.
 * @param arr - The input array to be sorted.
 * @param shrinkFactor - The shrink factor (optional, default is 1.3).
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function combSort(arr: number[], shrinkFactor?: number): number[];

/**
 * Comb Sort Non Mutating Copies the array and calls Comb Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function combSortNonMutating(arr: number[]): number[];

/**
 * Counting Sort Non Mutating Suitable for non-negative integers with a limited range.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function countingSortNonMutating(arr: number[]): number[];

/**
 * Counting Sort Mutates the original array with the results from the Non Mutating Counting Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function countingSort(arr: any[]): any[];

/**
 * Cycle Sort Minimizes the number of writes to the array by cyclically rotating elements to their correct positions.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function cycleSort(arr: number[]): number[];

/**
 * Cycle Sort Non Mutating Copies the array and calls Cycle Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function cycleSortNonMutating(arr: number[]): number[];

/**
 * Gnome Sort Non Mutating. Compare adjacent elements. If they are out of order, swap them. Move the gnome one step backward
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function gnomeSort(arr: number[]): number[];

/**
 * Gnome Sort Non Mutating Copies the array and calls Gnome Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function gnomeSortNonMutating(arr: number[]): number[];

/**
 * Heapify Heapify a subtree rooted at index i.
 * @param arr - The input array.
 * @param n - Size of the heap.
 * @param i - Index of the root of the subtree.
 * @returns
 * @author Joshua Jarman
 */
declare function heapify(arr: number[], n: number, i: number): void;

/**
 * Heap Sort Builds a max heap and repeatedly extracts the maximum element.
 * @param arr - The input array.
 * @returns - Sorted array.
 */
declare function heapSort(arr: number[]): number[];

/**
 * Heap Sort Non Mutating Copies the array and calls Heap Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function heapSortNonMutating(arr: number[]): number[];

/**
 * Insertion Sort Builds a sorted array by repeatedly inserting unsorted elements into their correct positions.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function insertionSort(arr: number[]): number[];

/**
 * Insertion Sort Non Mutating Copies the array and calls Insertion Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function insertionSortNonMutating(arr: number[]): number[];

/**
 * Intro Sort Non Mutating Non Mutating. Sorts an array using a combination of Quick Sort and Heap Sort or Insertion Sort
 * @param myArray - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function introSortNonMutating(myArray: any[]): any[];

/**
 * Intro Sort Mutates the original array with the results from the Non Mutating Intro Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function introSort(arr: any[]): any[];

/**
 * Javascript Sort Non Mutating Non Mutating. Sorts an array using the built in Javascript Sort algorithm, String-Based Lexicographic Sort with Timsort
 * @param myArray - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function javascriptSortNonMutating(myArray: any[]): any[];

/**
 * Merge Sort Mutates the original array with the results from the Non Mutating Merge Javascript
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function javascriptSort(arr: any[]): any[];

/**
 * Max Sort Non Mutating Performs a Min sort on a given array
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function maxSortNonMutating(arr: any[]): any[];

/**
 * Max Sort Mutates the original array with the results from the Non Mutating Max Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function maxSort(arr: any[]): any[];

/**
 * Merge Sort Non Mutating Divides the array into halves until smallest units reached, and merges them back together in a sorted manner.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function mergeSortNonMutating(arr: number[]): number[];

/**
 * Merge Sort Mutates the original array with the results from the Non Mutating Merge Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function mergeSort(arr: any[]): any[];

/**
 * Min Sort Non Mutating Performs a Min sort on a given array
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function minSortNonMutating(arr: any[]): any[];

/**
 * Min Sort Mutates the original array with the results from the Non Mutating Min Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function minSort(arr: any[]): any[];

/**
 * Pancake Sort Moves elements backward if they’re in the wrong order
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function pancakeSort(arr: number[]): number[];

/**
 * Pancake Sort Non Mutating Copies the array and calls Pancake Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function pancakeSortNonMutating(arr: number[]): number[];

/**
 * Quick Sort Iterative Mutates Array In Place. Chooses a pivot, partitions the array, and iterativly sorts the array.
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function quickSortIterative(arr: number[]): number[];

/**
 * Quick Sort Iterative Non Mutating Copies the array and calls Quick Sort Iterative on the copy
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function quickSortIterativeNonMutating(arr: number[]): number[];

/**
 * Quick Sort Merge Non Mutating Non Mutating. Chooses a pivot, partitions the array, and recursively sorts the subarrays through merging.
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function quickSortMergeNonMutating(arr: any[]): any[];

/**
 * Quick Sort Merge Mutates the original array with the results from the Non Mutating Quick Sort Merge
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function quickSortMerge(arr: any[]): any[];

/**
 * Quick Sort Recursive Mutates Array In Place. Chooses a pivot, partitions the array, and recursivly sorts the array.
 * @param arr - The input array to be sorted.
 * @param low - The low index.
 * @param high - The high index.
 * @author Joshua Jarman
 */
declare function quickSortRecursive(arr: number[], low?: number, high?: number): number[];

/**
 * Quick Sort Recursive Non Mutating Copies the array and calls Quick Sort Recursive on the copy
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function quickSortRecursiveNonMutating(arr: number[]): number[];

/**
 * Radix Sort Non Mutating Non Mutating. Sorts by individual digits, from least significant to most significant.
 * @param arr - The input array to be sorted.
 * @returns - The sorted array.
 * @author Joshua Jarman
 */
declare function radixSortNonMutating(arr: number[]): number[];

/**
 * Radix Sort Mutates the original array with the results from the Non Mutating Radix Sort
 * @param arr - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function radixSort(arr: any[]): any[];

/**
 * Selection Sort Mutates Array In Place. AFinds the smallest element and places it at the beginning, then repeats the process for the remaining elements.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function selectionSort(arr: number[]): number[];

/**
 * Selection Sort Non Mutating Copies the array and calls Selection Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function selectionSortNonMutating(arr: number[]): number[];

/**
 * Shell Sort Mutates Array In Place. An extension of insertion sort that compares elements separated by a fixed gap and gradually reduces the gap until it becomes 1.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function shellSort(arr: number[]): number[];

/**
 * Shell Sort Non Mutating Copies the array and calls Shell Sort on the copy
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function shellSortNonMutating(arr: number[]): number[];

/**
 * Average Average Calculates the average value for an array of numbers, returns 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The average value.
 * @author Joshua Jarman
 */
declare function arrayAverage(arr: number[]): number;

/**
 * Array Cumulative Sum Calculates the cumulative sum of an array of numbers.
 * @param arr - The input array of numbers.
 * @returns - The cumulative sum.
 * @author Joshua Jarman
 */
declare function arrayCumulativeSum(arr: number[]): number;

/**
 * Array Max Return the largest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The largest number in the array or 0 if empty.
 * @author Joshua Jarman
 */
declare function arrayMax(arr: number[]): number;

/**
 * Array Merge Merges two sorted arrays into a single sorted array.
 * @param leftArr - The left sorted array.
 * @param rightArr - The right sorted array.
 * @returns - The merged sorted array.
 * @author Joshua Jarman
 */
declare function arrayMerge(leftArr: number[], rightArr: number[]): number[];

/**
 * Array Min Return the smallest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The smallest number in the array or 0 if empty.
 * @author Joshua Jarman
 */
declare function arrayMin(arr: number[]): number;

/**
 * Number Digit Count Calculates the number of Digits of the largest number in an array.
 * @param arr - The number to count digits of
 * @returns - The digit count of the largest number in the array
 * @author Joshua Jarman
 */
declare function arrayMostDigits(arr: number[]): number;

/**
 * Array of Numbers Returns an Array of a given Length filled with the numbers 1 through X
 * @param num - The length of the Array
 * @returns - A new array containing the numbers
 * @author Joshua Jarman
 */
declare function arrayOfNumbers(num: number): number[];

/**
 * Array Random Shuffle Fisher-Yates (or Knuth) Shuffle Returns an Array that has been randomly Shuffled
 * @param myArray - The length of the Array
 * @returns - A new array containing the numbers
 * @author Joshua Jarman
 */
declare function arrayRandomShuffle(myArray: any[]): any[];

/**
 * Number Digit At Given a number it returns the digit as a specific location
 * @param num - The number
 * @param place - The place to get the digit at 0-x starting at 0
 * @returns - The digit at that location starting at 0th place
 * @author Joshua Jarman
 */
declare function numberDigitAt(num: number, place: number): number;

/**
 * Number Digit Count Calculates the number of Digits in a given Number.
 * @param num - The number to count digits of
 * @returns - The number of digits in the number
 * @author Joshua Jarman
 */
declare function numberDigitCount(num: number): number;

/**
 * String Random Generates a random string of specified length.
 * @param length - The desired length of the random string.
 * @param possible - A string containing possible characters for the random string.
 * @returns - The randomly generated string.
 * @author Joshua Jarman
 */
declare function stringRandom(length?: number, possible?: string): string;

/**
 * String Random Binary Generates a random binary string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated binary string.
 * @author Joshua Jarman
 */
declare function stringRandomBinary(length?: number): string;

/**
 * String Random Hexidecimal Generates a random hexidecimal string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated hexidecimal string.
 * @author Joshua Jarman
 */
declare function stringRandomHexidecimal(length?: number): string;

/**
 * String Random Numeric Generates a random hexidecimal string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated hexidecimal string.
 * @author Joshua Jarman
 */
declare function stringRandomNumeric(length?: number): string;

/**
 * String Reverse Reverses a String
 * @param str - The string to reverse
 * @returns - The rreversed string
 * @author Joshua Jarman
 */
declare function stringReverse(str?: string): string;

/**
 * String Truncate Truncates a string to a specific length.
 * @param inputString - The input string to truncate.
 * @param maxLength - The maximum length of the truncated string.
 * @returns - The truncated string.
 * @author Joshua Jarman
 */
declare function stringTruncate(inputString: string, maxLength: number): string;

/**
 * String UUI vX Generates a unique identifier (UII) alphanumeric string upper and lower case.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @param charset - The character set for the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated UII.
 * @author Joshua Jarman
 */
declare function stringUIIvX(length?: number, dateKey?: Date, charset?: string): string;

/**
 * String UUI Numeric Generates a unique identifier (UII) numeric string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated numeric UII.
 * @author Joshua Jarman
 */
declare function stringUIINumeric(length?: number, dateKey?: Date): string;

/**
 * String UUI Hexidecimal Generates a unique identifier (UII) hexidecimal string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated hexidecimal UII.
 * @author Joshua Jarman
 */
declare function stringUIIHexidecimal(length?: number, dateKey?: Date): string;

/**
 * String UUI AlphaNumeric Generates a unique identifier (UII) alphanumeric string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated alphanumeric UII.
 * @author Joshua Jarman
 */
declare function stringUIIAlphaNumeric(length?: number, dateKey?: Date): string;

/**
 * String UUID v4 Generates a Version 4 UUID (randomly generated UUID) in string format following the IETF RFC 4122
 * @returns A randomly generated UUID.
 * @author Joshua Jarman
 */
declare function stringUUIDv4(): string;

/**
 * String UUID v8 Generates a Version 8 UUID (randomly generated UUID v8 not time based v8) in string format
 * @returns A randomly generated UUID.
 * @author Joshua Jarman
 */
declare function stringUUIDv8(): string;

