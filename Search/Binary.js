/* jshint esversion: 6 */

function binarySearch(input, targetValue) {
    let lower = 0;
    let upper = input.length - 1;
    let middle = Math.floor(lower + upper) / 2;

    while (middle !== targetValue && lower < upper) {
        if (targetValue < input[middle])
        {
            upper = middle - 1;
        }
        else {
            lower = middle + 1;
        }
        middle = Math.floor(lower + upper) / 2;
    }
    if (targetValue === input[middle]) {
        return middle;
    } 
    return -1;
}