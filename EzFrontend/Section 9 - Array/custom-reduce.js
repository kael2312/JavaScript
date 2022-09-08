const array = [1, 2, 3, 4];

// không phải array hoặc callback func >=> báo lỗi
// array.length == 0, initValue == undefinde >=> báo lỗi
// array.length == 0 , initvalue !== undefined => return initvalue

function customReduce(array, callbackFn, initialValue) {
    if (!Array.isArray(array) || typeof callbackFn !== "function")
        throw Error("Invalid Parameter");
    if (array.length == 0) {
        if (initialValue == undefined) throw Error("Should have initialValue");
        return initialValue;
    }

    const hasInitialValue = initialValue != undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue ? initialValue : array[0];

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callbackFn(accumulator, array[i], i);
    }

    return accumulator;
}
console.log(customReduce(array, (acc, cur) => acc + cur, 0));
