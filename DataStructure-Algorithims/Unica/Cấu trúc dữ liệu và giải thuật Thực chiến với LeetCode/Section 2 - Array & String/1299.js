var replaceElements = function (arr) {
    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i] = Math.max(arr[i], arr[i + 1]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = -1;

    return arr;
};

let arrNumber = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arrNumber));
