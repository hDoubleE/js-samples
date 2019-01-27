/* jshint esversion: 6 */

// As simple as it gets. Search each item in a given input sequentially. 
// If a match is found, return index. Else, return -1.

// This is a slow thing. Same as Array.indexOf(). Big oh of N. Trash.

function sequentialSearch(input, targetValue) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === targetValue) {
            return i;
        }
    }
    return -1;
}