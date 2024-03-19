# Algorithms in Javascript

## Requirements
* Node, see `.tool-versions` and use `asdf` or other system such as `NVM` or `docker container` to install and manage.
* pnpm for package management
* vitest for testing
* jsdoc and jsdoc-tsd for typescript driven type checking using jsdoc in pure vanilla javascript without transpilation from typescript

## Setup
```zsh
pnpm install
```

## Test
```zsh
pnpm run test
```

## Generate TypeScript Type Definitions File
```zsh
pnpm exec jsdoc -t node_modules/@otris/jsdoc-tsd -r ./algorithms -d types.d.ts
```

## Algorithms Implimented

### Utilities

* **Array Merge: O(n)** `./algorithms/util/arrayMerge.js`
	
	- Params: _FirstArray, SecondArray_

* **Array Most Digits: O(n)** `./algorithms/util/arrayMostDigits.js`
	
	- Params: _Array_

* **Array of Numbers: O(n)** `./algorithms/util/arrayOfNumbers.js`
	
	- Params: _Number_

* **Array Random Shuffle: O(n)** `./algorithms/util/arrayRandomShuffle.js`
	
	- Params: _Array_

* **Number Digit At: O(1)** `./algorithms/util/numberDigitAt.js`
	
	- Params: _Number, Place_

* **Number Digit Count: O(1)** `./algorithms/util/numberDigitCount.js`
	
	- Params: _Number_

### Data Structures

* **Queue: O(1)** `./algorithms/datastructures/queue.js`
	
	- Methods: _Enqueue(item) Dequeue(), Peek(); Properties: length, isEmpty_

* **Stack: O(1)** `./algorithms/datastructures/stack.js`
	
	- Methods: _Push(item) Pop(), Peek(); Properties: length, isEmpty_

### Searches

* **Binary Search: O(log(n))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_

* **Interpolation Search: O(log(log(n)))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_

* **Javascript Built In Default Search: O(n)** `./algorithms/javascriptSearch.js`
	
	- Params: _Array, Target_

* **Jump Search: O(√n)** `./algorithms/search/jumpSearch.js`
	
	- Params: _Array, Target_

* **Linear Search: O(n)** `./algorithms/search/linearSearch.js`
	
	- Params: _Array, Target_

### Sorts

* **Bubble Sort: O(n²)** `./algorithms/sort/bubbleSort.js`
	
	- Params: _Array_

* **Bucket Sort: O(n + k)** `./algorithms/sort/bucketSort.js`
	
	- Params: _Array, Size_

* **Comb Sort: O(n²)** `./algorithms/sort/combSort.js`
	
	- Params: _Array, *ShrinkFactor_

* **Cycle Sort: O(n²)** `./algorithms/sort/cycleSort.js`
	
	- Params: _Array_

* **Heap Sort: O(n log(n))** `./algorithms/sort/heapSort.js`
	
	- Params: _Array_

* **Insertion Sort: O(n²)** `./algorithms/sort/insertionSort.js`
	
	- Params: _Array_

* **Intro Sort: O(n log(n))** `./algorithms/sort/introSort.js`
	
	- Params: _Array_

* **Javascript Built In Default Sort: O(n²)** `./algorithms/sort/javascriptSort.js`
	
	- Params: _Array_

* **Merge Sort: O(n log(n))** `./algorithms/sort/mergeSort.js`
	
	- Params: _Array_

* **Quick Sort: O(n²)** `./algorithms/sort/quickSort.js`
	
	- Params: _Array_

* **Selection Sort: O(n²)** `./algorithms/sort/selectionSort.js`
	
	- Params: _Array_

* **Shell Sort: O(n²)** `./algorithms/sort/shellSort.js`
	
	- Params: _Array_

### Problems

* **Twin Crystal Balls: O(√n)** `./algorithms/problems/twinCrystalBalls.js`
	
	- Params: _Array_

* **Sieve of Eratosthenes: O(n log(log(n)))** `./algorithms/problems/sieveOfEratosthenes.js`
	
	- Params: _Number_