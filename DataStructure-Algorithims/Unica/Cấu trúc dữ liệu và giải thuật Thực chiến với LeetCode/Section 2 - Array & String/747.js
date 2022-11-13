var dominantIndex = function (nums) {
    let cloneNums = [...nums];
    cloneNums.sort((a, b) => b - a);
    if (cloneNums[0] >= cloneNums[1] * 2) {
        let index = nums.findIndex((x) => x == cloneNums[0]);
        return index;
    }

    return -1;
};

let nums747 = [3, 6, 1, 0];
console.log('Leet code 747: ', dominantIndex(nums747));
