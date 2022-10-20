// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

var findDisappearedNumbers = function (nums) {
    // return arrResult;
    // let existArr = [];
    // let result = [];

    // for (let i = 0; i < nums.length; i++) {
    //     existArr[nums[i]] = true;
    // }
    // for (let i = 1; i <= nums.length; i++) {
    //     if (!existArr[i]) result.push(i);
    // }

    // return result;

    for (let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;
    }

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};

let arr448 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log('Leetcode 448: ', findDisappearedNumbers(arr448));
