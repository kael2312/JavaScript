function BubbleSort(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false; //Biến để kiểm tra nếu mảng đã được sắp xếp rồi thì không chạy vòng for nữa
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                isSwapped = true;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        if (!isSwapped) break;
    }

    return array;
}

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

function SelectionSort(arrayNumber) {
    for (let i = 0; i < arrayNumber.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arrayNumber.length; j++) {
            if (arrayNumber[j] < arrayNumber[indexMin]) {
                indexMin = j;
            }
        }
        if (arrNumber[indexMin] < arrNumber[i]) {
            let temp = arrayNumber[i];
            arrayNumber[i] = arrayNumber[indexMin];
            arrayNumber[indexMin] = temp;
        }
    }
    return arrayNumber;
}

let arrNumber = [3, 2, 10, 5, 8, 4, 7];
console.log('Bubble Sort: ', BubbleSort(arrNumber));
console.log('Insertion Sort: ', InsertionSort(arrNumber));
console.log('Selection Sort: ', SelectionSort(arrNumber));
