var myPow = function (x, n) {
    if (n == 0) return 1;
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    let t = myPow(x, Math.floor(n / 2));

    if (n % 2 == 0) {
        return t * t;
    } else {
        return x * t * t;
    }
};

console.log('Bài 50: ', myPow(2, -2));
