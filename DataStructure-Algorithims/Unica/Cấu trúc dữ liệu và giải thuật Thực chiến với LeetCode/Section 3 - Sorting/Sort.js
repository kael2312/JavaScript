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

function MergeSort() {
    let beforeMerge = [1, 5, 3, 2, 8, 7, 6, 4];
    console.log('Dãy ban đầu: ', beforeMerge);
    return implementMergeSort(beforeMerge, 0, beforeMerge.length - 1);
}

function implementMergeSort(arr, indexLeft, indexRight) {
    if (indexLeft == indexRight) {
        let newArr = [arr[indexLeft]];
        return newArr;
    }

    // Chia ra
    console.log('Chia: ', indexLeft, indexRight);
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
    console.log('Hợp vào: ', arrayResult);
    return arrayResult;
}

function QuickSort() {
    let beforeQuick = [1, 5, 3, 2, 8, 7, 6, 4];
    console.log('Quick sort start: ', beforeQuick);
    implementQuickSort(beforeQuick, 0, beforeQuick.length - 1);
    console.log('Quick sort end: ', beforeQuick);
}

function implementQuickSort(arr, indexLeft, indexRight) {
    if (indexLeft >= indexRight) return;

    // B1. Chọn khóa
    let key = arr[Math.floor((indexLeft + indexRight) / 2)];
    console.log('Khóa: ', key);

    // B2. Phân bố lại mảng
    let trueIndex = QuickSortPartition(arr, indexLeft, indexRight, key);
    console.log('True index: ', trueIndex);
    console.log('Arr: ', arr);

    // Chia ra
    implementQuickSort(arr, indexLeft, trueIndex - 1);
    implementQuickSort(arr, trueIndex, indexRight);
}

function QuickSortPartition(arr, indexLeft, indexRight, key) {
    let iR = indexRight;
    let iL = indexLeft;
    while (iL <= iR) {
        while (arr[iR] > key) iR--;
        while (arr[iL] < key) iL++;
        if (iL <= iR) {
            let temp = arr[iL];
            arr[iL] = arr[iR];
            arr[iR] = temp;
            iL++;
            iR--;
        }
    }
    return iL;
}

function ongDevQuickSort() {
    let ongDevBeforeQuick = [6, 5, 3, 2, 8, 7, 1, 4];
    console.log('Quick sort II start: ', ongDevBeforeQuick);
    ongDevImplementQuickSort(
        ongDevBeforeQuick,
        0,
        ongDevBeforeQuick.length - 1
    );
    console.log('Quick sort II end: ', ongDevBeforeQuick);
}

function ongDevImplementQuickSort(params, indexLeft, indexRight) {
    if (indexLeft >= indexRight) return;

    //B1.Chọn khóa
    let key = params[0];

    //B2. Phân bố lại mảng
    let trueIndex = ongDevPartition(params, indexLeft, indexRight, key);

    // Chia ra
    ongDevImplementQuickSort(params, indexLeft, trueIndex - 1);
    ongDevImplementQuickSort(params, trueIndex + 1, indexRight);
}

function ongDevPartition(params, indexLeft, indexRight, key) {
    let iL = indexLeft;
    let iR = indexRight;
    while (iL < iR) {
        if (iL == iR) break;
        while (params[iR] > key) {
            iR--;
            if (iL == iR) break;
        }
        if (iL == iR) break;
        if (params[iR] <= key) {
            params[iL] = params[iR];
            iL++;
        }
        if (iL == iR) break;
        while (params[iL] < key) {
            iL++;
            if (iL == iR) break;
        }
        if (iL == iR) break;
        if (params[iL] > key) {
            params[iR] = params[iL];
            iR--;
        }
    }
    if (iL == iR) {
        params[iL] = key;
        return iL;
    }
}

let arrNumber = [1, 5, 3, 2, 8, 7, 6, 4];
console.log('Bubble Sort: ', BubbleSort(arrNumber));
console.log('Insertion Sort: ', InsertionSort(arrNumber));
console.log('Selection Sort: ', SelectionSort(arrNumber));
console.log('Merge Sort: ', MergeSort());
console.log('Quick Sort: ', QuickSort());
console.log('Quick Sort PII: ', ongDevQuickSort());
