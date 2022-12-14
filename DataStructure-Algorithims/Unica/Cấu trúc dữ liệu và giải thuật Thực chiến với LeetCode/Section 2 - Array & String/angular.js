var splitArray = function (array) {
    let result = [];
    let arrayElement = [];
    for (let i = 0; i < array.length; i++) {
        if (arrayElement.length < 2) {
            arrayElement.push(array[i]);
        } else {
            result.push(arrayElement);
            arrayElement = [];
            arrayElement.push(array[i]);
        }
        if (i == array.length - 1) {
            if (arrayElement.length < 2) {
                result.push(arrayElement);
            }
        }
    }

    return result;
};

let arrInput = [4, 6, 7, 5, 2, 3, 5];
//output: [[4,6], [7,5], [2,3], [5]]
console.log('Angular VietNam: ', splitArray(arrInput));
