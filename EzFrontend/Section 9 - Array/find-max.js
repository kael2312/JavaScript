const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findMax(arr) {
    let max = arr[0];

    arr.forEach((element) => {
        if (element > max) {
            max = element;
        }
    });
    return max;
}

[3, 7, 10, 4];
function findSecondMax(arr) {
    let max = arr[0]; //3
    let secondMax = arr[0]; //3

    arr.forEach((element) => {
        if (element > max) {
            secondMax = max;
            max = element;
        } else if (element > secondMax) {
            secondMax = element;
        }
    });

    return secondMax;
}

console.log(findMax([3, 7, 10, 4]));
console.log(findSecondMax([3, 7, 10, 4]));
