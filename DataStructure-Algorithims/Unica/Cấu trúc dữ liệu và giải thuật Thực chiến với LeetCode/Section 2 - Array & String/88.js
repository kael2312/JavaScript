/*
*88. Merge Sorted Array

*You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

*Merge nums1 and nums2 into a single array sorted in non-decreasing order.

*The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. 

*Example 1:

*Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
*Output: [1,2,2,3,5,6]
*Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
*The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        insertToNums1(nums2[i], nums1, m);
        m++;
    }
};

function insertToNums1(insertNumber, arrayNumber, length) {
    let isInsertMiddle = false;
    for (let i = 0; i < length; i++) {
        if (arrayNumber[i] > insertNumber) {
            isInsertMiddle = true;
            for (let j = length - 1; j >= i; j--) {
                arrayNumber[j + 1] = arrayNumber[j];
            }
            arrayNumber[i] = insertNumber;
            break;
        }
    }

    if (!isInsertMiddle) {
        arrayNumber[length] = insertNumber;
    }
}

let nums1 = [2, 3, 4, 5, 0, 0, 0];
let nums2 = [3, 0, 6];
merge(nums1, 4, nums2, 3);
console.log(nums1);
