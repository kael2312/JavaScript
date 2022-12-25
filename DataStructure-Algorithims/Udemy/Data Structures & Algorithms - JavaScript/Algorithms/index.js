function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                isSwapped = true;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        if (!isSwapped) break;
    }
    return array;
}

function SelectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
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

// Merge 2 array
function merge(array1, array2) {
    let arrayResult = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < array1.length && i2 < array2.length) {
        if (array1[i1] < array2[i2]) {
            arrayResult.push(array1[i1]);
            i1++;
        } else {
            arrayResult.push(array2[i2]);
            i2++;
        }
    }
    while (i1 < array1.length) {
        arrayResult.push(array1[i1]);
        i1++;
    }
    while (i2 < array2.length) {
        arrayResult.push(array2[i2]);
        i2++;
    }

    return arrayResult;
}

function MergeSort(array) {
    // Điều kiện dừng là array có 1 phần tử
    if (array.length == 1) return array;

    // Chia nhỏ array
    let midIndex = Math.floor(array.length / 2);
    let array1 = array.slice(0, midIndex);
    let array2 = array.slice(midIndex);

    // Merge 2 array vào trong đó gọi đệ quy để chia nhỏ tiếp array ra
    return merge(MergeSort(array1), MergeSort(array2));
}

function QuickSort(array, leftIndex = 0, rightIndex = array.length - 1) {
    if (leftIndex < rightIndex) {
        let pivotIndex = pivot(array, leftIndex, rightIndex);
        QuickSort(array, leftIndex, pivotIndex - 1);
        QuickSort(array, pivotIndex + 1, rightIndex);
    }

    return array;
}

function pivot(array, pivotIndex = 1, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            let temp = array[swapIndex];
            array[swapIndex] = array[i];
            array[i] = temp;
        }
    }
    let temp = array[pivotIndex];
    array[pivotIndex] = array[swapIndex];
    array[swapIndex] = temp;
    return swapIndex;
}

let myArray = [7, 6, 1, 4, 3, 2, 5];
console.log('Bubble Sort: ', BubbleSort([4, 2, 6, 5, 1, 3]));
console.log('Selection Sort: ', SelectionSort([4, 2, 6, 5, 1, 3]));
console.log('Insertion Sort: ', InsertionSort([4, 2, 6, 5, 1, 3]));
console.log('Merge: ', merge([1, 3, 7, 8], [2, 4, 5, 6]));
console.log('Merge Sort: ', MergeSort([3, 1, 4, 2]));
//console.log('Pivot: ', pivot(myArray));
console.log('QuickSort: ', QuickSort(myArray));
