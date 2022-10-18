var heightChecker = function (heights) {
    let sortedHeight = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != sortedHeight[i]) {
            count++;
        }
    }

    return count;
};

let heights = [1, 1, 4, 2, 1, 3];
console.log('Leetcode 1051: ', heightChecker(heights));
