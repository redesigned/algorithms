// @ts-check
"use strict";

/**
 * Maze Solver
 * Pathfinds through a Grid Maze
 * @param {string[][]} [maze=[[' ']]] - The maze to be navigated.
 * @param {string} [wall=''] - A wall in the maze
 * @param {number[]} [start=[0,0]] - The start point [row, column]
 * @param {number[]} [end=[0,0]] - The end point [row, column]
 * @returns {number[][]} - A new array containing the path through the maze.
 * @complexity O(n²)
 */
export function mazeSolver(maze = [[' ']], wall = '', start = [0,0], end = [0,0]) {
	const path = [start];
	const current = start;

	if (current[0] === end[0] && current[1] === end[1]) {
		return path;
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
);