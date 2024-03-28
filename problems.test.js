import { expect, test } from 'vitest';

/* ## PROBLEMS ## */

import { dijkstraMazeSolver } from './algorithms/problems/dijkstraMazeSolver';
test('Dijkstra Maze Solver: O(n² log n)', () => {
	let wallChar = '#';
	let startChar = 'S';
	let endChar = 'E';
	let maze = [];
	maze = [
		['#','S','#'],
		['#',' ','#'],
		['#','E','#']
	];
	expect(dijkstraMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1]]);
	maze = [
		['#','#','#'],
		['S',' ','E'],
		['#','#','#']
	];
	expect(dijkstraMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[1, 0], [1, 1], [1, 2]]);
	maze = [
		['#','S','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','#'],
		['#',' ','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','#'],
		['#',' ','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','E'],
		['#','#','#','#','#','#','#']
	];
	expect(dijkstraMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3 ], [5, 4], [5, 5], [5, 6]]);
	maze = [
		['#','S','#'],
		['#','#','#'],
		['#','E','#']
	];
	expect(dijkstraMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual(-1);
	maze = [
		['#','S','#','#','#','#','#'],
		['#',' ','#',' ',' ',' ','#'],
		['#',' ',' ',' ','#',' ','#'],
		['#','#','#','#',' ',' ','#'],
		['E',' ','#','#',' ','#','#'],
		['#',' ',' ',' ',' ','#','#'],
		['#','#','#','#','#','#','#']
	];
	expect(dijkstraMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1], [2, 2], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [3, 4], [4, 4], [5, 4], [5, 3], [5, 2], [5, 1], [4, 1], [4, 0]]);
});

import { twinCrystalBalls } from './algorithms/problems/twinCrystalBalls';
test('Twin Crystal Balls: O(√n)', () => {
	expect(twinCrystalBalls([])).toBe(-1);
	expect(twinCrystalBalls([1])).toBe(-1);
	expect(twinCrystalBalls([0])).toBe(0);
	expect(twinCrystalBalls([0, 0])).toBe(1);
	expect(twinCrystalBalls([0, 0, 1])).toBe(1);
	expect(twinCrystalBalls([0, 0, 0])).toBe(2);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 1, 1])).toBe(4);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 1])).toBe(5);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0])).toBe(5);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0])).toBe(6);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 1])).toBe(6);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0])).toBe(7);
	expect(twinCrystalBalls([1, 1, 1, 1, 1, 1, 1])).toBe(-1);
	expect(twinCrystalBalls([0, 1, 1, 1, 1, 1, 1])).toBe(0);
	expect(twinCrystalBalls([1, 1, 1, 1, 1, 1, 1])).toBe(-1);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(23);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1])).toBe(21);
});
