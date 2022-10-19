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
    let threeNumSortedArr = [];

    //Insert từng phần tử vào mảng sắp xếp
    for (let i = 0; i < arrNumbs.length; i++) {
        insert(threeNumSortedArr, arrNumbs[i]);
    }
    if (threeNumSortedArr.length <= 2) return threeNumSortedArr[0];
    return threeNumSortedArr[2];
};

function insert(maxArray, insertNumber) {
    if (maxArray.length > 0) {
        for (let i = 0; i < 3; i++) {
            if (!maxArray[i]) {
                maxArray[i] = insertNumber;
                return;
            } else {
                if (insertNumber == maxArray[i]) return;
                else if (insertNumber > maxArray[i]) {
                    for (let j = maxArray.length; j > i; j--) {
                        maxArray[j] = maxArray[j - 1];
                    }
                    maxArray[i] = insertNumber;
                    return;
                }
            }
        }
    } else {
        maxArray[0] = insertNumber;
    }
}

let numbs = [1, 2];
console.log('Leetcode 414: ', thirdMax(numbs));
