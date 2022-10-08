var checkIfExist = function (arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            j++;
        } else {
            return false;
        }
    }
};
