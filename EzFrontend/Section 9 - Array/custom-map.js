const array = [1, 4, 9, 16];
function customMap(array, callbackFn) {
    if (!Array.isArray(array)) return undefined;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFn(array[i]));
    }

    return newArray;
}

function doubleNumber(number) {
    return number * 2;
}

console.log(customMap(array, doubleNumber));
console.log(customMap(array, (x) => x * 2));
