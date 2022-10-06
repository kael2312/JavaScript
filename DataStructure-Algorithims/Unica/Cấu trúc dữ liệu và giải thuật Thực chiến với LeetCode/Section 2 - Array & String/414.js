/*
*Given an integer array nums, return the third distinct maximum number in this array. 
*If the third maximum does not exist, return the maximum number.

*Example 1:
*Input: nums = [3,2,1]
*Output: 1
*Explanation:
*The first distinct maximum is 3.
*The second distinct maximum is 2.
*The third distinct maximum is 1.

*Example 3:
*Input: nums = [2,2,3,1]
*Output: 1
*Explanation:
*The first distinct maximum is 3.
*The second distinct maximum is 2 (both 2's are counted together since they have the same value).
*The third distinct maximum is 1.
*/

var thirdMax = function (arrNumbs) {
    let threeNumSortedArr = [-1, -1, -1];
    for (let i = 0; i < arrNumbs.length; i++) {
        insert(threeNumSortedArr, arrNumbs[i]);
    }
    if (threeNumSortedArr[2] == -1) return threeNumSortedArr[0];
    return threeNumSortedArr[2];
    // return threeNumSortedArr;
};

function insert(maxArray, insertNumber) {
    let i = 0;
    while (i < maxArray.length) {
        if (insertNumber == maxArray[i]) return;
        else if (insertNumber > maxArray[i]) {
            break;
        } else {
            i++;
        }
    }
}

let numbs = [2, 2, 3, 1];
console.log(thirdMax(numbs));
