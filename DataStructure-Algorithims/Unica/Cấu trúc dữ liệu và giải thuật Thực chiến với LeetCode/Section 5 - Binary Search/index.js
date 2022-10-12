function LoopBinarySearch(nums, target) {
    let indexLeft = 0;
    let indexRight = nums.length - 1;

    while (indexLeft <= indexRight) {
        let indexMiddle = Math.floor((indexLeft + indexRight) / 2);
        if (nums[indexMiddle] == target) return indexMiddle;
        if (nums[indexMiddle] < target) indexLeft = indexMiddle + 1;
        if (nums[indexMiddle] > target) indexRight = indexMiddle - 1;
    }

    return -1;
}

let nums = [-1, 0, 3, 5, 9, 12]; // find 9
console.log('Loop Binary Search: ', LoopBinarySearch(nums, 9));
