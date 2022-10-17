var sortArrayByParity = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 == 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    return nums;
};

let exampleArr = [0, 1];
console.log('Leet code 905: ', sortArrayByParity(exampleArr));
