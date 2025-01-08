
/**
 * Merge Sort algorithm is performed on Arrays
 * Using divide and conquer technique
 * DIVIDE: First Array is divided in sub-arrays recursively
 * untill only element is remaining
 * CONQUER: Each sub-array is independently sorted
 * MERGE: Sorted sub-arrays are merged together in sortedOrder
 * <-Repeat-> steps until whole array is sorted
 */

//MERGE: Sorted sub-arrays are merged together in sortedOrder
function mergeSubArraysInSortedOrder(inpArr, start, middle, end) {
    // start->mid : is first sorted sub array
    // mid+1->end : is second sorted sub array
    // result_array : is merged arr from start->end sorted (we can inpArr for it)
    let leftSubArrStartIdx = start;
    const leftSubArrayLen = middle - leftSubArrStartIdx + 1;
    const leftSubArray = [];
    for (let i = 0; i < leftSubArrayLen; i++) {
        leftSubArray.push(inpArr[leftSubArrStartIdx]);
        leftSubArrStartIdx++;
    }

    console.log('left sub array', leftSubArray);

    let rightSubArrStartIdx = middle + 1;
    const rightSubArrayLen = end - rightSubArrStartIdx + 1;
    const rightSubArray = [];
    for (let i = 0; i < rightSubArrayLen; i++) {
        rightSubArray.push(inpArr[rightSubArrStartIdx]);
        rightSubArrStartIdx++;
    }

    console.log('right sub array', rightSubArray);
    // smallest element from start (arr1) or mid+1 (arr2) goes 0th pos in result_array
    // increment insertion index to 1 
    // followed by second smallest element btw next arr1 or arr2 elm 
    // until start > middle or middle > end
    let i = 0;
    let j = 0;
    let mergeArrIdx = start;

    while (i < leftSubArrayLen && j < rightSubArrayLen) {
        const firstSubArrElm = leftSubArray[i];
        const secondSubArrElm = rightSubArray[j];

        if (firstSubArrElm <= secondSubArrElm) { // if let's say two sub arrays have same elm
            inpArr[mergeArrIdx] = firstSubArrElm; 
            i++; // increment current index of first sub-array
        }

        if (secondSubArrElm < firstSubArrElm) {
            inpArr[mergeArrIdx] = secondSubArrElm;
            j++;
        }

        mergeArrIdx++; // increment indext where next elem is inserted
    }

    // aditionally if sub arrays aren't of equal len 
    // or all elms of one sub array were smaller than other
    while (i < leftSubArrayLen) {
        inpArr[mergeArrIdx] = leftSubArray[i];
        i++;
        mergeArrIdx++;
    }

    // aditionally if sub arrays aren't of equal len 
    // or all elms of one sub array were smaller than other
    while (j < rightSubArrayLen) {
        inpArr[mergeArrIdx] = rightSubArray[j];
        j++;
        mergeArrIdx++;
    }  
}

// DIVIDE: First Array is divided in sub-arrays recursively
function divideIntoSubArraysRecursively(inpArr, start, end) {
    // we need a condition we stop dividing basically 
    // when we are left with one element optimally and start merging
    if (start >= end) { // Basically start is same as end we have one elem
        return;
    }

    let middle = start + Math.floor((end - start)/2);

    divideIntoSubArraysRecursively(inpArr, start, middle); // left half arr[start, middle]
    divideIntoSubArraysRecursively(inpArr, middle + 1, end); // right half arr[middle + 1, end]

    mergeSubArraysInSortedOrder(inpArr, start, middle, end);
}

function mergeSort() {
    // to perform merge we should start by first dividing the array
    // into sub arrays recursively
    // inpArr[0, len - 1/2] inpArr[len/2, len - 1];
    // to divide an inpArr we need start, middle, & end point, so we can divide like 
    // inpArr[start, middle], inpArr[middle + 1, endPoint]
    
    let start = 0; 
    let end = this.length - 1;
    divideIntoSubArraysRecursively(this, start, end);
}

Array.prototype.mergeSort = mergeSort;
// [].mergeSort()