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
	const visited = new Set();
	let possibilities = [];
	let path = [start];
	let current = start;
	let noExit = false;
	const isInMaze = (row, col) => {
		console.log(row);
		console.log(col);
        return row >= 0 && row < maze.length && col >= 0 && col < maze[0].length;
    };
    const isWall = (row, col) => {
        return maze[row][col] === wall;
    };
    const isVisited = (row, col) => {
        return visited.has(`${row},${col}`);
    };
	const isEnd = (current, end) => {
        return (current[0] === end[0] && current[1] === end[1]);
    };
	const isPossibility = (row, col) => {
        if (isInMaze(row, col) && !isWall(row, col) && !isVisited(row,col)) {
			return true;
		} else {
			return false;
		}
    };
	while (!isEnd(current, end) || !noExit) {
		const row = current[0];
		const col = current[1];
		visited.add(`${row},${col}`);
		console.log('Current:');
		console.log(current);
		console.log('Path:');
		console.log(path);
		console.log('Previous Possibilities:');
		console.log(possibilities);
		if (isPossibility(row - 1, col)) {
			possibilities = [...possibilities, [...path, [row - 1, col]]];
		}
		if (isPossibility(row, col + 1)) {
			possibilities = [...possibilities, [...path, [row, col + 1]]];
		}
		if (isPossibility(row + 1, col)) {
			possibilities = [...possibilities, [...path, [row + 1, col]]];
		}
		if (isPossibility(row, col - 1)) {
			possibilities = [...possibilities, [...path, [row, col - 1]]];
		}
		console.log('New Possibilities:');
		console.log(possibilities);
		if (possibilities.length < 1) {
			noExit = true;
		} else {
			path = possibilities.pop();
			current = path[possibilities.length - 1];
		}
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