/**
 * String Truncate
 * Truncates a string to a specific length.
 * @param {string} inputString - The input string to truncate.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 * @author Joshua Jarman
 */
export function stringTruncate(inputString, maxLength) {
    return inputString.length > maxLength ? inputString.substring(0, maxLength) : inputString;
}