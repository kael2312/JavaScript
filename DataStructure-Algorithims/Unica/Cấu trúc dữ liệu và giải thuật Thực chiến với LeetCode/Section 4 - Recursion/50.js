var myPow = function (x, n) {
    if (n == 0) return 1;
    if (n > 0) return positiveNumber(x, n);
    if (n < 0) return negativeNumber(x, n * -1);
};

function positiveNumber(x, n) {
    if (n == 1) return x;
    return x * positiveNumber(x, n - 1);
}

function negativeNumber(x, n) {
    if (n == 1) return 1 / x;
    return 1 / (x * positiveNumber(x, n - 1));
}

console.log('Bài 50: ', myPow(2, -2));
