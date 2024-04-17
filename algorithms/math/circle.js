// @ts-check
"use strict";

/**
 * Circle: Area To Circumference (C = 2√(Aπ))
 * @param {number} area - The Area
 * @returns {number} - The Circumference
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleAreaToCircumference(area) {
	return 2 * Math.sqrt(area * Math.PI);
}

/**
 * Area To Diameter (d = 2√(A/π))
 * @param {number} area - The Area
 * @returns {number} - The Diameter
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleAreaToDiameter(area) {
	return 2 * Math.sqrt(area / Math.PI);
}

/**
 * Area To Radius (r = √(A/π))
 * @param {number} area - The Area
 * @returns {number} - The Radius
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleAreaToRadius(area) {
	return Math.sqrt(area / Math.PI);
}

/**
 * Circumference To Area (A = π * (C/2π)²)
 * Circumference To Area (A = C²/4π)
 * @param {number} circumference - The Circumference
 * @returns {number} - The Area
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleCircumferenceToArea(circumference) {
	return Math.PI * (circumference / (Math.PI * 2)) * (circumference / (Math.PI * 2));
}

/**
 * Circle: Circumference To Diameter (d = C/π)
 * @param {number} circumference - The Circumference
 * @returns {number} - The Diameter
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleCircumferenceToDiameter(circumference) {
	return circumference / Math.PI;
}

/**
 * Circumference To Radius (r = C/2π)
 * @param {number} circumference - The Circumference
 * @returns {number} - The Radius
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleCircumferenceToRadius(circumference) {
	return circumference / (Math.PI * 2);
}

/**
 * Diameter To Area (A = πd²/4)
 * @param {number} diameter - The Diameter
 * @returns {number} - The Area
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleDiameterToArea(diameter) {
	return Math.PI * diameter * diameter / 4;
}

/**
 * Diameter To Circumference (C = πd)
 * @param {number} diameter - The Diameter
 * @returns {number} - The Circumference
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleDiameterToCircumference(diameter) {
	return Math.PI * diameter;
}

/**
 * Circle: Diameter To Radius (r = d/2)
 * @param {number} diameter - The Diameter
 * @returns {number} - The Radius
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleDiameterToRadius(diameter) {
	return diameter / 2;
}

/**
 * Circle: Radius To Area (A = πr²)
 * @param {number} radius - The Radius
 * @returns {number} - The Area
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleRadiusToArea(radius) {
	return Math.PI * radius * radius;
}

/**
 * Circle: Radius To Circimfernce (C = 2πr)
 * @param {number} radius - The Radius
 * @returns {number} - The Circimfernce
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleRadiusToCircumference(radius) {
	return 2 * Math.PI * radius;
}

/**
 * Circle: Radius To Diameter (d = 2r)
 * @param {number} radius - The Radius
 * @returns {number} - The Diameter
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function circleRadiusToDiameter(radius) {
	return radius * 2;
}
