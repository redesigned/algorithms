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

* **Queue** `./algorithms/queue.js`
	
	- Methods: _Enqueue(item) Dequeue(), Peek(); Properties: length, isEmpty_

* **Stack** `./algorithms/stack.js`
	
	- Methods: _Push(item) Pop(), Peek(); Properties: length, isEmpty_

### Searches

* **Binary Search** `./algorithms/binarySearch.js`
	
	- Params: _Array, Target, *Start *End_

### Sorts

* **Bubble Sort** `./algorithms/bubbleSort.js`
	
	- Params: _Array_

### Problems

* **Twin Crystal Balls** `./algorithms/twinCrystalBalls.js`
	
	- Params: _Array_

* **Sieve of Eratosthenes** `./algorithms/sieveOfEratosthenes.js`
	
	- Params: _Number_