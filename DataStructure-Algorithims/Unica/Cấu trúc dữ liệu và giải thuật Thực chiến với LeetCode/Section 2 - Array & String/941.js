var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    if (arr[1] <= arr[0]) return false;
    let isIncreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) return false;
        // Dãy tăng
        if (arr[i] < arr[i + 1]) {
            if (isIncreasing == false) return false;
        }
        // Dãy giảm
        if (arr[i] > arr[i + 1]) {
            if (isIncreasing == true) isIncreasing = false;
        }
    }
    if (isIncreasing == true) return false;
    return true;
};

let randomArr = [0, 3, 2, 1];
console.log(validMountainArray(randomArr));
