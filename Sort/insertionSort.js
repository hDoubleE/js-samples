/* jshint esversion: 6 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }
    return arr;
}

function insertionSortAlt(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const spliced = arr.splice(i, 1);
                arr.splice(j, 0, spliced[0]);
            }
        }
    }
    return arr;
}