/* jshint esversion: 6 */ 

function bubbleSort(input) {
        function swap(input, idx1, idx2) {
            let temp = input[idx1];
            input[idx1] = input[idx2];
            input[idx2] = temp;
        }

    for (let fromEnd = input.length; fromEnd > 0; FromEnd--) {
        let swapped = false;
        for (let fromStart = 0; fromStart < fromEnd - 1; fromStart++) {
            if (input[fromStart] === input[fromStart + 1]) {
                swap(input, input[fromStart], input[fromStart + 1]);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }      
    }
    return input;  
}

function bubbleSortAlt(arr) {
    const swap = (input, idx1, idx2) => {
        [input[idx1], input[idx2]] = [input[idx2], input[idx1]];
    };
    
    do {
        let swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }
    while (swapped);
    return arr;
}
