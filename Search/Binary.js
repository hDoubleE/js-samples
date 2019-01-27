/* jshint esversion: 6 */

function binarySearch(input, targetValue) {
    let start = 0;
    let end = input.length - 1;
    let middle = Math.floor(start + end) / 2;

    while (middle !== val && start < end) {
        if (targetValue < input[middle])
        {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    if (targetValue === input[middle]) {
        return middle;
    } 
    return -1;
}