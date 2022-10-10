var checkIfExist = function (arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        let halfVal = arr[i] / 2;
        let doubleVal = arr[i] * 2;
        if (obj[doubleVal]) return true;
        if (obj[halfVal]) return true;
        obj[arr[i]] = 1;
    }
    return false;
};

arrayNUmber = [7, 1, 14, 11];
console.log(checkIfExist(arrayNUmber));
