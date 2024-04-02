# Algorithms in Javascript

## Requirements
* Node, see `.tool-versions` and use `asdf` or other system such as `NVM` or `docker container` to install and manage.
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

* **[Ceasars Cipher: O(n)](algorithms/cryptography/ceasarsCipher.js)**
* **[Generate Key AES-CBC: O(1)](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Encrypt AES-CBC: O???](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Decrypt AES-CBC: O???](algorithms/cryptography/encryptionAES-CBC.js)**
* **[Generte Key AES-CTR: O(1)](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Encrypt AES-CTR: O???](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Decrypt AES-CTR: O???](algorithms/cryptography/encryptionAES-CTR.js)**
* **[Generate Key AES-GCM: O(1)](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Encrypt AES-GCM: O???](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Decrypt AES-GCM: O???](algorithms/cryptography/encryptionAES-GCM.js)**
* **[Encode Base64: O(n)](algorithms/cryptography/base64.js)**
* **[Decode Base64: O(n)](algorithms/cryptography/base64.js)**
* **[MD5: O(n)](algorithms/cryptography/md5.js)**
* **[ROT5: O(n)](algorithms/cryptography/rot5.js)**
* **[ROT13: O(n)](algorithms/cryptography/rot13.js)**
* **[ROT18: O(n)](algorithms/cryptography/rot18.js)**
* **[ROT47: O(n)](algorithms/cryptography/rot47.js)**
* **[xOR: O(n)](algorithms/cryptography/xOR.js)**

### Data Structures

* **[Queue: O(1)](algorithms/datastructures/queue.js)**
* **[Stack: O(1)](algorithms/datastructures/stack.js)**

### Math

* **[Babylonian Square Root: O(log(n))](algorithms/math/babylonianSquareRoot.js)**
* **[Calculate Pi: O(√n)](algorithms/math/calculatePi.js)**
* **[Fake Pi: O(√n)](algorithms/math/fakePi.js)**
* **[Fibonacci Numbers: O(√n)](algorithms/math/fibonacciNumbers.js)**
* **[Newtons Square Root: O(log(n))](algorithms/math/newtonsSquareRoot.js)**
* **[Sieve of Eratosthenes: O(n log(log(n)))](algorithms/math/sieveOfEratosthenes.js)**

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
* **[Bucket Sort: O(n+k)](algorithms/sort/bucketSort.js)**
* **[Comb Sort: O(n²)](algorithms/sort/combSort.js)**
* **[Counting Sort: O(n+k)](algorithms/sort/countingSort.js)**
* **[Cycle Sort: O(n²)](algorithms/sort/cycleSort.js)**
* **[Gnome Sort: O(n²)](algorithms/sort/gnomeSort.js)**
* **[Heap Sort: O(n log(n))](algorithms/sort/heapSort.js)**
* **[Insertion Sort: O(n²)](algorithms/sort/insertionSort.js)**
* **[Intro Sort: O(n log(n))](algorithms/sort/introSort.js)**
* **[Javascript Built In Default Sort: O(n²)](algorithms/sort/javascriptSort.js)**
* **[Merge Sort: O(n log(n))](algorithms/sort/mergeSort.js)**
* **[Quick Sort Iterative: O(n²)](algorithms/sort/quickSortIterative.js)**
* **[Quick Sort Merge: O(n²)](algorithms/sort/quickSortMerge.js)**
* **[Quick Sort Recursive: O(n²)](algorithms/sort/quickSortRecursive.js)**
* **[Radix Sort: O(nk)](algorithms/sort/radixSort.js)**
* **[Selection Sort: O(n²)](algorithms/sort/selectionSort.js)**
* **[Shell Sort: O(n²)](algorithms/sort/shellSort.js)**

### Utilities

* **[Array Average: O(n)](algorithms/util/arrayAverage.js)**
* **[Array Cumulative Sum: O(n)](algorithms/util/arrayCumulativeSum.js)**
* **[Array Max: O(n)](algorithms/util/arrayMax.js)**
* **[Array Merge: O(n)](algorithms/util/arrayMerge.js)**
* **[Array Min: O(n)](algorithms/util/arrayMin.js)**
* **[Array Most Digits: O(n)](algorithms/util/arrayMostDigits.js)**
* **[Array of Numbers: O(n)](algorithms/util/arrayOfNumbers.js)**
* **[Array Random Shuffle: O(n)](algorithms/util/arrayRandomShuffle.js)**
* **[Number Digit At: O(1)](algorithms/util/numberDigitAt.js)**
* **[Number Digit Count: O(1)](algorithms/util/numberDigitCount.js)**
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
