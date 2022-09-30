function InsertionSort(params) {
    for (let i = 1; i < params.length; i++) {
        let current = params[i];
        for (let j = i - 1; j >= 0; j--) {
            if (current > params[j]) break;
            params[j + 1] = params[j];
            params[j] = current;
        }
    }
    return params;
}

let arrNums = [3, 2, 10, 5, 8, 4, 7];
console.log(InsertionSort(arrNums));
