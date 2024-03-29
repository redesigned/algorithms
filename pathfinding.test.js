import { expect, test } from 'vitest';

/* ## PATHFINDING ## */

import { dijkstraMazeSolver } from './algorithms/pathfinding/dijkstraMazeSolver';
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

import { tremauxsMazeSolver } from './algorithms/pathfinding/tremauxsMazeSolver';
test('Tremauxs Maze Solver: O(n²)', () => {
	let wallChar = '#';
	let startChar = 'S';
	let endChar = 'E';
	let maze = [];
	maze = [
		['#','S','#'],
		['#',' ','#'],
		['#','E','#']
	];
	expect(tremauxsMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1]]);
	maze = [
		['#','#','#'],
		['S',' ','E'],
		['#','#','#']
	];
	expect(tremauxsMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[1, 0], [1, 1], [1, 2]]);
	maze = [
		['#','S','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','#'],
		['#',' ','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','#'],
		['#',' ','#','#','#','#','#'],
		['#',' ',' ',' ',' ',' ','E'],
		['#','#','#','#','#','#','#']
	];
	expect(tremauxsMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3 ], [5, 4], [5, 5], [5, 6]]);
	maze = [
		['#','S','#'],
		['#','#','#'],
		['#','E','#']
	];
	expect(tremauxsMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual(-1);
	maze = [
		['#','S','#','#','#','#','#'],
		['#',' ','#',' ',' ',' ','#'],
		['#',' ',' ',' ','#',' ','#'],
		['#','#','#','#',' ',' ','#'],
		['E',' ','#','#',' ','#','#'],
		['#',' ',' ',' ',' ','#','#'],
		['#','#','#','#','#','#','#']
	];
	expect(tremauxsMazeSolver(maze, wallChar, startChar, endChar)).toStrictEqual([[0, 1], [1, 1], [2, 1], [2, 2], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [3, 4], [4, 4], [5, 4], [5, 3], [5, 2], [5, 1], [4, 1], [4, 0]]);
});
