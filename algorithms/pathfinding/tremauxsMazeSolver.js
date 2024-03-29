// @ts-check
"use strict";

/**
 * Tremauxs Maze Solver
 * Solves a maze using Trémaux's algorithm to find a path through the maze, retuns -1 if no path can be found.
 * @param {string[][]} maze - The maze to be solved, represented as a 2D array of strings.
 * @param {string} wallChar - The character that represents a wall in the maze.
 * @param {string} startChar - The character that represents the start point in the maze.
 * @param {string} endChar - The character that represents the end point in the maze.
 * @returns {(number[] | undefined)[] | number} - The path from start to end as an array of coordinates, or -1 if no solution exists.
 * @complexity O(n²) - Where n is the total number of cells in the maze.
 */
export function tremauxsMazeSolver(maze, wallChar, startChar, endChar) {
	let start, end;
	for(let i = 0; i < maze.length; i++) {
		for(let j = 0; j < maze[i].length; j++) {
			if(maze[i][j] === startChar) start = [i, j];
			if(maze[i][j] === endChar) end = [i, j];
		}
	}
	let path = [start];
	let intersections = [];
	let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	while(path.length > 0) {
		let [x, y] = path[path.length - 1] || [0, 0];
		if(x === end?.[0] && y === end?.[1]) break;
		let options = direction.filter(([dx, dy]) => {
			let [nx, ny] = [x + dx, y + dy];
			return nx >= 0 && nx < maze.length && ny >= 0 && ny < maze[0].length && maze[nx][ny] !== wallChar;
		});
		if(options.length > 1) intersections.push([x, y]);
		if(options.length === 0) {
			if (intersections.length === 0) {
				return -1;
			}
			let [ix, iy] = intersections.pop() || [0, 0];
			// @ts-ignore
			path = path.slice(0, path.findIndex(([px, py]) => px === ix && py === iy) + 1);
			continue;
		}
		let [dx, dy] = options[0];
		path.push([x + dx, y + dy]);
		maze[x][y] = wallChar;
	}
	return (path) ? path : -1;
}
