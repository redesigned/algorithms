// @ts-check
"use strict";

/**
 * Dijkstra Maze Solver
 * Solves a maze using Dijkstra's algorithm to find the shortest path through a maze, returns -1 if no path can be found.
 * @param {string[][]} maze - The maze to be solved, represented as a 2D array of strings.
 * @param {string} wallChar - The character that represents a wall in the maze.
 * @param {string} startChar - The character that represents the start point in the maze.
 * @param {string} endChar - The character that represents the end point in the maze.
 * @returns {number[][] | number} - The path from start to end as an array of coordinates, or -1 if no solution exists.
 * @complexity O(n² log n) - Where n is the total number of cells in the maze.
 */
export function dijkstraMazeSolver(maze, wallChar, startChar, endChar) {
	let start, end;
	let dist = {}, prev = {}, queue = [];
	for (let i = 0; i < maze.length; i++) {
		for (let j = 0; j < maze[i].length; j++) {
			if (maze[i][j] === startChar) start = [i, j];
			if (maze[i][j] === endChar) end = [i, j];
			if (maze[i][j] !== wallChar) {
				let key = i + ',' + j;
				dist[key] = Infinity;
				queue.push([i, j]);
			}
		}
	}
	if (start === undefined || end === undefined) {
		return -1;
	}
	dist[start.join(',')] = 0;
	while (queue.length > 0) {
		queue.sort(function(a, b) {
			return dist[a.join(',')] - dist[b.join(',')];
		});
		let curr = queue.shift();
		if (curr === undefined) {
			return -1;
		}
		let currKey = curr.join(',');
		const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
		for (let d = 0; d < directions.length; d++) {
			let next = [curr[0] + directions[d][0], curr[1] + directions[d][1]];
			let nextKey = next.join(',');
			if (dist[nextKey] !== undefined) {
				let alt = dist[currKey] + 1;
				if (alt < dist[nextKey]) {
					dist[nextKey] = alt;
					prev[nextKey] = curr;
				}
			}
		}
	}
	let path = [], u = end.join(',');
	if (prev[u] || u === start.join(',')) {
		while (u) {
			path.unshift(u.split(',').map(Number));
			u = prev[u] && prev[u].join(',');
		}
	}
	return path.length > 0 ? path : -1;
}