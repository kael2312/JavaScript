let step = [];
var climbStairs = function (n) {
    if (step[n] != undefined) return step[n];
    if (n == 1 || n == 2) {
        step[n] = n;
        return n;
    }
    step[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return step[n];
};
