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

### Data Structures

* **Queue: O(1)** `./algorithms/datastructures/queue.js`
	
	- Methods: _Enqueue(item) Dequeue(), Peek(); Properties: length, isEmpty_

* **Stack: O(1)** `./algorithms/datastructures/stack.js`
	
	- Methods: _Push(item) Pop(), Peek(); Properties: length, isEmpty_

### Searches

* **Linear Search: O(n)** `./algorithms/search/linearSearch.js`
	
	- Params: _Array, Target_

* **Javascript Search: O(n)** `./algorithms/javascriptSearch.js`
	
	- Params: _Array, Target_

* **Jump Search: O(√n)** `./algorithms/search/jumpSearch.js`
	
	- Params: _Array, Target_

* **Binary Search: O(log(n))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_

* **Interpolation Search: O(log(log(n)))** `./algorithms/search/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_

### Sorts

* **Bubble Sort: O(n²)** `./algorithms/sort/bubbleSort.js`
	
	- Params: _Array_

* **Quick Sort: O(n log(n)) to O(n²)** `./algorithms/sort/quickSort.js`
	
	- Params: _Array_

* **Bucket Sort: O(n + k)** `./algorithms/sort/bucketSort.js`
	
	- Params: _Array, Size_

* **Javascript Built In Sort: O(n log(n)) to O(n²)** `./algorithms/sort/javascriptSort.js`
	
	- Params: _Array_

### Problems

* **Twin Crystal Balls: O(√n)** `./algorithms/problems/twinCrystalBalls.js`
	
	- Params: _Array_

* **Sieve of Eratosthenes: O(n log(log(n)))** `./algorithms/problems/sieveOfEratosthenes.js`
	
	- Params: _Number_