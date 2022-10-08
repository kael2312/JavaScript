function factorialCalculator(number) {
    if (number == 0) return 1;
    return number * factorialCalculator(number - 1);
}

function fibonacciCalculator(index) {
    if (index < 0) return undefined;
    if (index == 0) return 0;
    if (index == 1 || index == 2) return 1;
    return fibonacciCalculator(index - 1) + fibonacciCalculator(index - 2);
}

let F = [];
function refactorFibonacci(index) {
    if (F[index] != undefined) return F[index];

    if (index <= 2) {
        F[1] = 1;
        F[2] = 1;
        return 1;
    }

    F[index] = refactorFibonacci(index - 1) + refactorFibonacci(index - 2);
    return F[index];
}

function forLoopFibonacci(index) {
    let F = [];
    F[1] = 1;
    F[2] = 1;
    for (let i = 0; i <= index; i++) {
        F[i] = F[i - 1] + f[i - 2];
    }
    return F[index];
}

function recursionPrintf(array, index) {
    if (index > array.length - 1 || index < 0) return;
    recursionPrintf(array, index + 1);
    console.log(array[index]);
}

function revertRecursionPrintf(array, index) {
    if (index > array.length - 1 || index < 0) return;
    recursionPrintf(array, index + 1);
    console.log(array[index]);
}

let max = -1;
function findMaxNonReturnValue(array, index) {
    if (index < array.length) {
        if (array[index] > max) {
            max = array[index];
        }
        findMaxNonReturnValue(array, index + 1);
    }
}

function findMaxReturnValue(array, index, previousMax) {
    if (index < array.length) {
        let currentMax = Math.max(previousMax, array[index]);
        return findMaxReturnValue(array, index + 1, currentMax);
    }
    return previousMax;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arrNumber = [1, 2, 3];
console.log('Factorial of 5: ', factorialCalculator(5));
console.log('5th Fibonacci number is: ', fibonacciCalculator(10));
console.log('5th Fibonacci number using refactor is: ', refactorFibonacci(10));
console.log('5th Fibonacci number using for loop is: ', refactorFibonacci(10));
console.log(recursionPrintf(arr, 5));
console.log(revertRecursionPrintf(arr, 5));
findMaxNonReturnValue(arr, 0);
console.log('Max: ', max);
console.log(findMaxReturnValue(arrNumber, 0, -1));
