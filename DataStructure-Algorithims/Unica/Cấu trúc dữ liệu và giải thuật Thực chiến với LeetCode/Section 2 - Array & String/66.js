var plusOne = function (digits) {
    let rememberNumber = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + rememberNumber;
        digits[i] = sum % 10;
        rememberNumber = Math.floor(sum / 10);
    }
    if (rememberNumber == 1) {
        digits.unshift(1);
    }

    return digits;
};

let digits66 = [9, 9];
console.log('Leet code 66: ', plusOne(digits66));
