/* jshint esversion: 6 */

function selectionSort(input) {
    const swap = (input, idx1, idx2) => {
        [input[idx1], input[idx2]] = [input[idx2], input[idx1]];
    };
    
    for (let i = 0; i < input.length; i++) {
        let lowest = i;
        for (let j = 1; j < input.length; j++) {
            if (input[lowest] > input[j]) {
                lowest = j;
            }
        }
        if ( i !== lowest) {
            swap(input, i, lowest);
        }
    }
}