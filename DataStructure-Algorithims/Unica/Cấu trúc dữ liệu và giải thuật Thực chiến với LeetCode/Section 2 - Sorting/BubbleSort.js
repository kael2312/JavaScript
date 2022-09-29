function BubbleSort(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                isSwapped = true;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        if (!isSwapped) break;
        console.log(array);
    }

    return array;
}

let arrNumber = [1, 2, 3, 4, 5, 7, 6];
console.log(BubbleSort(arrNumber));
