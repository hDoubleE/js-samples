/* jshint esversion: 6 */

// The Knuth, Morris, Platt Algorith is pretty dope. 
// Typical time to find a sub string (n) in text (M) is Big oh of N * M.
// These guys knocked it down to Big oh of N + M. 

// Sounds trivial but they're kind of a big deal.

function computeTempArray(subString) {
    let tempArray = [];

    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer < subString.length) {
        if (subString[firstPointer] === subString[secondPointer]) {
            tempArray[secondPointer] = firstPointer + 1;
            firstPointer++;
            secondPointer++;
        }
        else {
            if (firstPointer !== 0) {
                firstPointer = tempArray[firstPointer - 1];
            }
            else {
                tempArray[secondPointer] = 0;
                secondPointer++;
            }
        }

    }
    return tempArray;
}

function kmpSearch(subString, text) {
    let tempArray = computeTempArray(subString);

    let firstPointer = 0;
    let secondPointer = 0;

    while (firstPointer < text.length && secondPointer < subString.length) {
        if (text[firstPointer] === subString[secondPointer]) {
            firstPointer++;
            secondPointer++;
        }
        else {
            if (secondPointer !== 0) {
                secondPointer = tempArray[secondPointer - 1]; 
            }
            else {
                firstPointer++;
            }
        }
    }
    if (secondPointer == subString.length) {
        return true;
    }
    return false;
}

kmpSearch("abcabcdxy", "abcfgrabfhabcbabcabcdxy");

