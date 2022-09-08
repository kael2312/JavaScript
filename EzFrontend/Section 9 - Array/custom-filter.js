const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

function customFilter(array, callbackFn) {
    if (!Array.isArray(array) || typeof callbackFn !== "function")
        return undefined;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])) newArray.push(array[i]);
    }
    return newArray;
}

console.log(customFilter(words, (x) => x.length > 6));
