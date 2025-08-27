# Algorithms in Javascript

## Requirements
* Node, see `.tool-versions` and use `asdf` or other system such as `nvm` or `docker container` or `nix shell` to install and manage.
* pnpm for package management
* vitest for testing
* jsdoc and jsdoc-tsd for typescript driven type checking using jsdoc in pure vanilla javascript without transpilation from typescript

## Setup
```zsh
pnpm install
chmod +x generateTypes.sh runTests.sh
```

## Test
```zsh
./runTests.sh
```

## Generate TypeScript Type Definitions File
```zsh
./generateTypes.sh
```

## Algorithms Implimented

### Cryptography

* **[Atbash Cipher: O(n)](algorithms/cryptography/atbashCipher.js)**
* **[Braille Encode/Decode: O(n)](algorithms/cryptography/braille.js)**
* **[Ceasars Cipher: O(n)](algorithms/cryptography/ceasarsCipher.js)**
* **[Encode Base64: O(n)](algorithms/cryptography/base64.js)**
* **[Decode Base64: O(n)](algorithms/cryptography/base64.js)**
* **[MD5: O(n)](algorithms/cryptography/md5.js)**
* **[Morse Code Encode/Decode: O(n)](algorithms/cryptography/morseCode.js)**
* **[Rail Fence Cipher Encrypt: O(n)](algorithms/cryptography/railFenceCipher.js)**
* **[Rail Fence Cipher Decrypt: O(n)](algorithms/cryptography/railFenceCipher.js)**
* **[ROT5: O(n)](algorithms/cryptography/rot5.js)**
* **[ROT13: O(n)](algorithms/cryptography/rot13.js)**
* **[ROT18: O(n)](algorithms/cryptography/rot18.js)**
* **[ROT47: O(n)](algorithms/cryptography/rot47.js)**
* **[Shift Key Cipher Encrypt: O(n)](algorithms/cryptography/shiftKeyCipher.js)**
* **[Shift Key Cipher Decrypt: O(n)](algorithms/cryptography/shiftKeyCipher.js)**
* **[xOR: O(n)](algorithms/cryptography/xOR.js)**
* **[xOR Encrypt: O(n)](algorithms/cryptography/xOR.js)**
* **[xOR Decrypt: O(n)](algorithms/cryptography/xOR.js)**
* **[Vigenère Cipher Encrypt: O(n)](algorithms/cryptography/vigenereCipher.js)**
* **[Vigenère Cipher Decrypt: O(n)](algorithms/cryptography/vigenereCipher.js)**
* **[Generate Key AES-CBC: O(1)](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Encrypt AES-CBC: O???](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Decrypt AES-CBC: O???](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Generte Key AES-CTR: O(1)](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Encrypt AES-CTR: O???](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Decrypt AES-CTR: O???](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Generate Key AES-GCM: O(1)](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Encrypt AES-GCM: O???](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Decrypt AES-GCM: O???](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Generate Private Key RSA-OAEP: O(n)](algorithms/cryptography/encryptionRSA-OAEP.js)**
* **[Extract Public Key RSA-OAEP: O(1)](algorithms/cryptography/encryptionRSA-OAEP.js)**
* **[Encrypt RSA-OAEP: O???](algorithms/cryptography/encryptionRSA-OAEP.js)**
* **[Decrypt RSA-OAEP: O???](algorithms/cryptography/encryptionRSA-OAEP.js)**

### Data Structures

* **[Queue: O(1)](algorithms/datastructures/queue.js)**
* **[Stack: O(1)](algorithms/datastructures/stack.js)**

### Math

* **[Babylonian Square Root: O(log(n))](algorithms/math/babylonianSquareRoot.js)**
* **[Calculate Pi: O(√n)](algorithms/math/calculatePi.js)**
* **[Circle (Area to Circumference): O(1)](algorithms/math/circle.js)**
* **[Circle (Area to Diameter): O(1)](algorithms/math/circle.js)**
* **[Circle (Area to Radius): O(1)](algorithms/math/circle.js)**
* **[Circle (Circumference to Area): O(1)](algorithms/math/circle.js)**
* **[Circle (Circumference to Diameter): O(1)](algorithms/math/circle.js)**
* **[Circle (Circumference to Radius): O(1)](algorithms/math/circle.js)**
* **[Circle (Diameter to Area): O(1)](algorithms/math/circle.js)**
* **[Circle (Diameter to Circumference): O(1)](algorithms/math/circle.js)**
* **[Circle (Diameter to Radius): O(1)](algorithms/math/circle.js)**
* **[Circle (Radius to Area): O(1)](algorithms/math/circle.js)**
* **[Circle (Radius to Circumference): O(1)](algorithms/math/circle.js)**
* **[Circle (Radius to Diameter): O(1)](algorithms/math/circle.js)**
* **[Fake Pi: O(√n)](algorithms/math/fakePi.js)**
* **[Fibonacci Numbers: O(√n)](algorithms/math/fibonacciNumbers.js)**
* **[Is Prime: O(√n)](algorithms/math/isPrime.js)**
* **[Newtons Square Root: O(log(n))](algorithms/math/newtonsSquareRoot.js)**
* **[Sieve of Eratosthenes: O(n log(log(n)))](algorithms/math/sieveOfEratosthenes.js)**
* **[Sphere (Circumference to Volume): O(1)](algorithms/math/sphere.js)**
* **[Sphere (Diameter to Volume): O(1)](algorithms/math/sphere.js)**
* **[Sphere (Radius to Volume): O(1)](algorithms/math/sphere.js)**
* **[Sphere (Volume to Circumference): O(1)](algorithms/math/sphere.js)**
* **[Sphere (Volume to Diameter): O(1)](algorithms/math/sphere.js)**
* **[Sphere (Volume to Radius): O(1)](algorithms/math/sphere.js)**

### Path Finding

* **[Dijkstra's Maze Solver: O(n² log n)](algorithms/pathfinding/dijkstraMazeSolver.js)**
* **[Trémaux's Maze Solver: O(n²)](algorithms/pathfinding/tremauxsMazeSolver.js)**

### Problems

* **[Twin Crystal Balls: O(√n)](algorithms/problems/twinCrystalBalls.js)**

### Searches

* **[Binary Search: O(log(n))](algorithms/search/binarySearch.js)**
* **[Fibonacci Search: O(log n)](algorithms/search/fibonacciSearch.js)**
* **[Interpolation Search: O(log(log(n)))](algorithms/search/interpolationSearch.js)**
* **[Javascript Built In Default Search: O(n)](algorithms/search/javascriptSearch.js)**
* **[Jump Search: O(√n)](algorithms/search/jumpSearch.js)**
* **[Linear Search: O(n)](algorithms/search/linearSearch.js)**

### Sorts

* **[Bubble Sort: O(n²)](algorithms/sort/bubbleSort.js)**
* **[Bubble Sort Non Mutating: O(n²)](algorithms/sort/bubbleSort.js)**
* **[Bucket Sort: O(n+k)](algorithms/sort/bucketSort.js)**
* **[Bucket Sort Non Mutating: O(n+k)](algorithms/sort/bucketSort.js)**
* **[Comb Sort: O(n²)](algorithms/sort/combSort.js)**
* **[Comb Sort Non Mutating: O(n²)](algorithms/sort/combSort.js)**
* **[Counting Sort: O(n+k)](algorithms/sort/countingSort.js)**
* **[Counting Sort Non Mutating: O(n+k)](algorithms/sort/countingSort.js)**
* **[Cycle Sort: O(n²)](algorithms/sort/cycleSort.js)**
* **[Cycle Sort Non Mutating: O(n²)](algorithms/sort/cycleSort.js)**
* **[Gnome Sort: O(n²)](algorithms/sort/gnomeSort.js)**
* **[Gnome Sort Non Mutating: O(n²)](algorithms/sort/gnomeSort.js)**
* **[Heap Sort: O(n log(n))](algorithms/sort/heapSort.js)**
* **[Heap Sort Non Mutating: O(n log(n))](algorithms/sort/heapSort.js)**
* **[Insertion Sort: O(n²)](algorithms/sort/insertionSort.js)**
* **[Insertion Sort Non Mutating: O(n²)](algorithms/sort/insertionSort.js)**
* **[Intro Sort: O(n log(n))](algorithms/sort/introSort.js)**
* **[Intro Sort Non Mutating: O(n log(n))](algorithms/sort/introSort.js)**
* **[Javascript Built In Default Sort (Lexicographic): O(n²)](algorithms/sort/javascriptSort.js)**
* **[Javascript Built In Default Sort Non Mutating (Lexicographic): O(n²)](algorithms/sort/javascriptSort.js)**
* **[Max Sort: O(n²)](algorithms/sort/maxSort.js)**
* **[Max Sort Non Mutating: O(n²)](algorithms/sort/maxSort.js)**
* **[Merge Sort: O(n log(n))](algorithms/sort/mergeSort.js)**
* **[Merge Sort Non Mutating: O(n log(n))](algorithms/sort/mergeSort.js)**
* **[Min Sort: O(n²)](algorithms/sort/minSort.js)**
* **[Min Sort Non Mutating: O(n²)](algorithms/sort/minSort.js)**
* **[Quick Sort Iterative: O(n²)](algorithms/sort/quickSortIterative.js)**
* **[Quick Sort Iterative Non Mutating: O(n²)](algorithms/sort/quickSortIterative.js)**
* **[Quick Sort Merge: O(n²)](algorithms/sort/quickSortMerge.js)**
* **[Quick Sort Merge Non Mutating: O(n²)](algorithms/sort/quickSortMerge.js)**
* **[Quick Sort Recursive: O(n²)](algorithms/sort/quickSortRecursive.js)**
* **[Quick Sort Recursive Non Mutating: O(n²)](algorithms/sort/quickSortRecursive.js)**
* **[Radix Sort: O(nk)](algorithms/sort/radixSort.js)**
* **[Radix Sort Non Mutating: O(nk)](algorithms/sort/radixSort.js)**
* **[Selection Sort: O(n²)](algorithms/sort/selectionSort.js)**
* **[Selection Sort Non Mutating: O(n²)](algorithms/sort/selectionSort.js)**
* **[Shell Sort: O(n²)](algorithms/sort/shellSort.js)**
* **[Shell Sort Non Mutating: O(n²)](algorithms/sort/shellSort.js)**

### Utilities

* **[Array Average: O(n)](algorithms/util/arrayAverage.js)**
* **[Array Cumulative Sum: O(n)](algorithms/util/arrayCumulativeSum.js)**
* **[Array Max: O(n)](algorithms/util/arrayMax.js)**
* **[Array Merge: O(n)](algorithms/util/arrayMerge.js)**
* **[Array Min: O(n)](algorithms/util/arrayMin.js)**
* **[Array Most Digits: O(n)](algorithms/util/arrayMostDigits.js)**
* **[Array of Numbers: O(n)](algorithms/util/arrayOfNumbers.js)**
* **[Array Random Shuffle: O(n)](algorithms/util/arrayRandomShuffle.js)**
* **[Debounce: O(1)](algorithms/util/debounce.js)**
* **[Number Digit At: O(1)](algorithms/util/numberDigitAt.js)**
* **[Number Digit Count: O(1)](algorithms/util/numberDigitCount.js)**
* **[Poll: O(n)](algorithms/util/poll.js)**
* **[String Random: O(1)](algorithms/util/stringRandom.js)**
* **[String Random Binary: O(1)](algorithms/util/stringRandom.js)**
* **[String Random Hexidecimal: O(1)](algorithms/util/stringRandom.js)**
* **[String Random Numeric: O(1)](algorithms/util/stringRandom.js)**
* **[String Reverse: O(n)](algorithms/util/stringReverse.js)**
* **[String Truncate: O(1)](algorithms/util/stringTruncate.js)**
* **[String UII vX: O(1)](algorithms/util/stringUIIvX.js)**
* **[String UII AlphaNumeric: O(1)](algorithms/util/stringUIIvX.js)**
* **[String UII Hexidecimal: O(1)](algorithms/util/stringUIIvX.js)**
* **[String UII Numeric: O(1)](algorithms/util/stringUIIvX.js)**
* **[String UUID v4: O(1)](algorithms/util/stringUUIDv4.js)**
* **[String UUID v8: O(1)](algorithms/util/stringUUIDv8.js)**
* **[Throttle: O(1)](algorithms/util/throttle.js)**
