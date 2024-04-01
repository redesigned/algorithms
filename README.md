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
	
	- Methods: _String, Offset_
	- Returns: _String_

* **Encode Base64: O(n)** `./algorithms/cryptography/base64.js`
	
	- Methods: _String_
	- Returns: _String_

* **Decode Base64: O(n)** `./algorithms/cryptography/base64.js`
	
	- Methods: _String_
	- Returns: _String_

* **MD5: O(n)** `./algorithms/cryptography/md5.js`
	
	- Methods: _String_
	- Returns: _String_

* **ROT5: O(n)** `./algorithms/cryptography/rot5.js`
	
	- Methods: _String_
	- Returns: _String_

* **ROT13: O(n)** `./algorithms/cryptography/rot13.js`
	
	- Methods: _String_
	- Returns: _String_

* **ROT18: O(n)** `./algorithms/cryptography/rot18.js`
	
	- Methods: _String_
	- Returns: _String_

* **ROT47: O(n)** `./algorithms/cryptography/rot47.js`
	
	- Methods: _String_
	- Returns: _String_

* **xOR: O(n)** `./algorithms/cryptography/xOR.js`
	
	- Methods: _String, *Key_
	- Returns: _String_

### Data Structures

* **Queue: O(1)** `./algorithms/datastructures/queue.js`
	
	- Methods: _Enqueue(item) Dequeue(), Peek(); Properties: length, isEmpty_

* **Stack: O(1)** `./algorithms/datastructures/stack.js`
	
	- Methods: _Push(item) Pop(), Peek(); Properties: length, isEmpty_

### Math

* **Calculate Pi: O(√n)** `./algorithms/mah/calculatePi.js`
	
	- Params: _Number_
	- Returns: _String_

* **Fake Pi: O(√n)** `./algorithms/math/fakePi.js`
	
	- Params: _Number_
	- Returns: _String_

* **Fibonacci Numbers: O(√n)** `./algorithms/math/fibonacciNumbers.js`
	
	- Params: _Number_
	- Returns: _Array_

* **Newtons Square Root: O(log(n))** `./algorithms/math/newtondSquareRoot.js`
	
	- Params: _Number, *Tolerance_
	- Returns: _Number_

* **Twin Crystal Balls: O(√n)** `./algorithms/math/twinCrystalBalls.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Sieve of Eratosthenes: O(n log(log(n)))** `./algorithms/math/sieveOfEratosthenes.js`
	
	- Params: _Number_
	- Returns: _Array_

### Path Finding

* **Dijkstra's Maze Solver: O(n² log n)** `./algorithms/pathfinding/dijkstraMazeSolver.js`
	
	- Params: _Maze, wallChar, startChar, endChar_
	- Returns: _Number_

* **Trémaux's Maze Solver: O(n²)** `./algorithms/pathfinding/tremauxsMazeSolver.js`
	
	- Params: _Maze, wallChar, startChar, endChar_
	- Returns: _Number_

### Problems

* **Twin Crystal Balls: O(√n)** `./algorithms/problems/twinCrystalBalls.js`
	
	- Params: _Array_
	- Returns: _Number_

### Searches

* **Binary Search: O(log(n))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_
	- Returns: _Number_

* **Fibonacci Search: O(log n)** `./algorithms/search/fibonacciSearch.js`
	
	- Params: _Array, Target_
	- Returns: _Number_

* **Interpolation Search: O(log(log(n)))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_
	- Returns: _Number_

* **Javascript Built In Default Search: O(n)** `./algorithms/javascriptSearch.js`
	
	- Params: _Array, Target_
	- Returns: _Number_

* **Jump Search: O(√n)** `./algorithms/search/jumpSearch.js`
	
	- Params: _Array, Target_
	- Returns: _Number_

* **Linear Search: O(n)** `./algorithms/search/linearSearch.js`
	
	- Params: _Array, Target_
	- Returns: _Number_

### Sorts

* **Bubble Sort: O(n²)** `./algorithms/sort/bubbleSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Bucket Sort: O(n + k)** `./algorithms/sort/bucketSort.js`
	
	- Params: _Array, Size_
	- Returns: _Array_

* **Comb Sort: O(n²)** `./algorithms/sort/combSort.js`
	
	- Params: _Array, *ShrinkFactor_
	- Returns: _Array_

* **Counting Sort: O(n+k)** `./algorithms/sort/countingSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Cycle Sort: O(n²)** `./algorithms/sort/cycleSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Gnome Sort: O(n²)** `./algorithms/sort/gnomeSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Heap Sort: O(n log(n))** `./algorithms/sort/heapSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Insertion Sort: O(n²)** `./algorithms/sort/insertionSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Intro Sort: O(n log(n))** `./algorithms/sort/introSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Javascript Built In Default Sort: O(n²)** `./algorithms/sort/javascriptSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Merge Sort: O(n log(n))** `./algorithms/sort/mergeSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Quick Sort Recursive: O(n²)** `./algorithms/sort/quickSortRecursive.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Quick Sort Iterative: O(n²)** `./algorithms/sort/quickSortIterative.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Radix Sort: O(nk)** `./algorithms/sort/radixSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Selection Sort: O(n²)** `./algorithms/sort/selectionSort.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Shell Sort: O(n²)** `./algorithms/sort/shellSort.js`
	
	- Params: _Array_
	- Returns: _Array_

### Utilities

* **Array Average: O(n)** `./algorithms/util/arrayAverage.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Array Cumulative Sum: O(n)** `./algorithms/util/arrayCumulativeSum.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Array Max: O(n)** `./algorithms/util/arrayMax.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Array Merge: O(n)** `./algorithms/util/arrayMerge.js`
	
	- Params: _FirstArray, SecondArray_
	- Returns: _Array_

* **Array Min: O(n)** `./algorithms/util/arrayMin.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Array Most Digits: O(n)** `./algorithms/util/arrayMostDigits.js`
	
	- Params: _Array_
	- Returns: _Number_

* **Array of Numbers: O(n)** `./algorithms/util/arrayOfNumbers.js`
	
	- Params: _Number_
	- Returns: _Array_

* **Array Random Shuffle: O(n)** `./algorithms/util/arrayRandomShuffle.js`
	
	- Params: _Array_
	- Returns: _Array_

* **Number Digit At: O(1)** `./algorithms/util/numberDigitAt.js`
	
	- Params: _Number, Place_
	- Returns: _Number_

* **Number Digit Count: O(1)** `./algorithms/util/numberDigitCount.js`
	
	- Params: _Number_
	- Returns: _Number_

* **String Random: O(1)** `./algorithms/util/stringRandom.js`
	
	- Params: _Length, *PossibleChars_
	- Returns: _String_

* **String Random Binary: O(1)** `./algorithms/util/stringRandom.js`
	
	- Params: _Length_
	- Returns: _String_

* **String Random Hexidecimal: O(1)** `./algorithms/util/stringRandom.js`
	
	- Params: _Length_
	- Returns: _String_

* **String Random Numeric: O(1)** `./algorithms/util/stringRandom.js`
	
	- Params: _Length_
	- Returns: _String_

* **String Reverse: O(n)** `./algorithms/util/stringReverse.js`
	
	- Params: _String_
	- Returns: _String_

* **String Truncate: O(1)** `./algorithms/util/stringTruncate.js`
	
	- Params: _String, Length_
	- Returns: _String_

* **String UII vX: O(1)** `./algorithms/util/stringUIIvX.js`
	
	 Params: _*Length, *Date, *CharSet_
	- Returns: _String_

* **String UII AlphaNumeric: O(1)** `./algorithms/util/stringUIIvX.js`
	
	 Params: _*Length, *Date_
	- Returns: _String_

* **String UII Hexidecimal: O(1)** `./algorithms/util/stringUIIvX.js`
	
	 Params: _*Length, *Date_
	- Returns: _String_

* **String UII Numeric: O(1)** `./algorithms/util/stringUIIvX.js`
	
	 Params: _*Length, *Date_
	- Returns: _String_

* **String UUID v4: O(1)** `./algorithms/util/stringUUIDv4.js`
	
	- Returns: _String_

* **String UUID v8: O(1)** `./algorithms/util/stringUUIDv8.js`
	
	- Returns: _String_
