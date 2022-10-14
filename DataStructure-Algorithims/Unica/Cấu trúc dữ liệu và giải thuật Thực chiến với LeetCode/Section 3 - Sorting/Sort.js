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

function MergeSort(params) {
    return implementMergeSort(params, 0, params.length - 1);
}

function implementMergeSort(arr, indexLeft, indexRight) {
    if (indexLeft == indexRight) {
        let newArr = [arr[indexLeft]];
        return newArr;
    }

    // Chia ra
    let indexMiddle = Math.floor((indexLeft + indexRight) / 2);
    let arrayLeft = implementMergeSort(arr, indexLeft, indexMiddle);
    let arrayRight = implementMergeSort(arr, indexMiddle + 1, indexRight);
    let arrayResult = [];
    let arrayResultLength = arrayLeft.length + arrayRight.length;

    // Hợp vào;
    let i = 0;
    let iL = 0;
    let iR = 0;
    while (i < arrayResultLength) {
        if (iL < arrayLeft.length && iR < arrayRight.length) {
            if (arrayLeft[iL] < arrayRight[iR]) {
                arrayResult[i] = arrayLeft[iL];
                iL++;
                i++;
            } else {
                arrayResult[i] = arrayRight[iR];
                iR++;
                i++;
            }
        } else {
            // Dãy bên trái đã được đẩy hết vào result
            if (iR < arrayRight.length) {
                arrayResult[i] = arrayRight[iR];
                iR++;
                i++;
                // Dãy bên phải đã được đẩy hết vào result
            } else {
                arrayResult[i] = arrayLeft[iL];
                iL++;
                i++;
            }
        }
    }
    return arrayResult;
}

let arrNumber = [5, 1, 1, 2, 0, 0];
console.log('Bubble Sort: ', BubbleSort(arrNumber));
console.log('Insertion Sort: ', InsertionSort(arrNumber));
console.log('Selection Sort: ', SelectionSort(arrNumber));
console.log('Merge Sort: ', MergeSort(arrNumber));
