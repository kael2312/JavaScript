var plusOne = function (digits) {
    let number = BigInt(digits.join(''));
    number = number + 1;
    let result = Array.from(String(number), Number);
    return result;
};

let digits66 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log('Leet code 66: ', plusOne(digits66));
