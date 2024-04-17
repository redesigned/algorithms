// @ts-check
"use strict";

/**
 * Sphere: Circumference to Volume (V = (4/3)π(C/2π)³)
 * @param {number} circumference - The Circumference
 * @returns {number} - The Volume
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereCircumferenceToVolume(circumference) {
	return (4/3) * Math.PI * Math.pow((circumference/(2 * Math.PI)), 3);
}

/**
 * Sphere: Diameter to Volume (V = (1/6)πd³)
 * @param {number} diameter - The Diameter
 * @returns {number} - The Volume
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereDiameterToVolume(diameter) {
	return (1/6) * Math.PI * (diameter ** 3);
}

/**
 * Sphere: Radius to Volume (V = (4/3)πr³)
 * @param {number} radius - The Radius
 * @returns {number} - The Volume
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereRadiusToVolume(radius) {
	return (4/3) * Math.PI * (radius ** 3);
}

/**
 * Sphere: Volume to Circumference (C = 2π(³√(3V /4π)))
 * @param {number} volume - The Volume
 * @returns {number} - The Circumference
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereVolumeToCircumference(volume) {
	return 2 * Math.PI * (Math.cbrt((3 * volume) / (4 * Math.PI)));
}

/**
 * Sphere: Volume to Diameter (d = )
 * @param {number} volume - The Volume
 * @returns {number} - The Diameter
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereVolumetoDiameter(volume) {
	return 2 * (Math.cbrt((3 * volume) / (4 * Math.PI)));
}

/**
 * Sphere: Volume to Radius (r = )
 * @param {number} volume - The Volume
 * @returns {number} - The Radius
 * @complexity - O(1)
 * @author Joshua Jarman
 */
export function sphereVolumeToRadius(volume) {
	return (Math.cbrt((3 * volume) / (4 * Math.PI)));
}
