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

function BinarySearch(nums, target) {
    return RecursionBinarySearch(nums, target, 0, nums.length - 1);
}

function RecursionBinarySearch(nums, target, indexLeft, indexRight) {
    if (indexLeft > indexRight) return -1;
    let indexMiddle = Math.floor((indexLeft + indexRight) / 2);
    if (nums[indexMiddle] == target) return indexMiddle;
    if (nums[indexMiddle] < target) {
        return RecursionBinarySearch(nums, target, indexMiddle + 1, indexRight);
    }
    if (nums[indexMiddle] > target) {
        return RecursionBinarySearch(nums, target, indexLeft, indexMiddle - 1);
    }
}

let nums = [-1, 0, 3, 5, 9, 12]; // find 9
console.log('Loop Binary Search: ', LoopBinarySearch(nums, 9));
console.log('Recursion Binary Search: ', BinarySearch(nums, 9));
