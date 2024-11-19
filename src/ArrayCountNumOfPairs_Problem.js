

/**
 * Count numbers of pairs in character array where 
 * arr[i] = a && arr[j] = b && i < j
 * @param {*} arr 
 * @returns {numOfPairs, indexes}
 * TC - O(n2)
 * for example arr = ['a', 'a', 'a', 'a'];
 */
function countNumberOfPairs(arr, a, b) {
   //pair should ['a', 'b'] for this example
    let numOfPairs = 0;
    const indexes = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === a) {
            for(let startIdx = i + 1; startIdx < arr.length; startIdx++) {
                if (arr[startIdx] === b) {
                    numOfPairs++;
                    indexes.push([i, startIdx]);
                }
            }
        }
    }

    return {
        numOfPairs, 
        indexes
    };
}
// Run this to count
// const arr = ['a', 'c', 'g', 'd', 'g', 'a', 'g'];
// countNumberOfPairs(arr, 'a', 'b')
