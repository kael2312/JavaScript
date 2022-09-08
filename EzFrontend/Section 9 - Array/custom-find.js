// find(x => x % 2 === 0)

const array1 = [5, 12, 8, 130, 44];

//v1
function findFirstEven(arr) {
    if (!Array.isArray(arr)) return undefined;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) return arr[i];
    }

    return undefined;
}

//v2
function customFind(array, callbackFn) {
    if (!Array.isArray(array)) return undefined;

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])) return array[i];
    }
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(customFind(array1, isEven));
console.log(
    customFind(array1, function isEven(number) {
        return number % 2 === 0;
    })
);
console.log(
    customFind(array1, function (number) {
        return number % 2 === 0;
    })
);
console.log(customFind(array1, (x) => x % 2 === 0));
console.log(customFind(array1, (x) => x > 100));
