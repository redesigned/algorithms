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
	const visited = new Set();
	const current = start;
	const noExit = false;
	const isValidCell = (row, col) => {
        return row >= 0 && row < maze.length && col >= 0 && col < maze[0].length;
    };
    const isWall = (row, col) => {
        return maze[row][col] === wall;
    };
    const isVisited = (row, col) => {
        return visited.has(`${row},${col}`);
    };
	const markVisited = (row, col) => {
        visited.add(`${row},${col}`);
    };
	while (current != end || !noExit){
		// implimentation
	}
	if (!noExit) {
		return path;
	} else {
		return -1;
	}
}

mazeSolver(
	[
		['##E'],
		['# #'],
		['#S#']
	],
	'#',
	[2,1],
	[0,2]
); // -1


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
	[4,1],
	[1,7]
); // [[4,1],[3,1],[3,2],[3,3],[2,3],[1,3],[1,4],[1,5],[1,6],[1,7]]