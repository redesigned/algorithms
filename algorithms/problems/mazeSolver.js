// @ts-check
"use strict";

/**
 * Maze Solver
 * Pathfinds through a Grid Maze
 * @param {string[][]} [maze=[[' ']]] - The maze to be navigated.
 * @param {string} [wall='#'] - A wall in the maze
 * @param {number[]} [start=[0,0]] - The start point [row, column]
 * @param {number[]} [end=[0,0]] - The end point [row, column]
 * @returns {number[][] | -1} - A new array containing the path through the maze or -1 if no exit.
 * @complexity O(n²)
 */
export function mazeSolver(maze = [[' ']], wall = '#', start = [0,0], end = [0,0]) {
	const path = [start];
	const branchPoints = [];
	const current = start;
	const noExit = false;
	while (start != end || !noExit){

	}

	if (!noExit) {
		return path;
	} else {
		return -1;
	}
}



mazeSolver(
	[
		['######E#'],
		['#      #'],
		['#S######']
	],
	'#',
	[2,1],
	[0,6]
); // [[2,1],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[0.6]]

mazeSolver(
	[
		['########'],
		['#      E'],
		['### ####'],
		['#      #'],
		['#S######']
	],
	'#',
	[2,1],
	[0,6]
); // [[4,1],[3,1],[3,2],[3,3],[2,3],[1,3],[1,4],[1,5],[1,6],[1,7]]