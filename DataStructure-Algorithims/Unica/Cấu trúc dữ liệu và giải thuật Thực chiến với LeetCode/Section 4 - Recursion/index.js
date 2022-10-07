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

function factorialPrintf(array) {
    let count = array.length - 1;
    if (count <= 0) return;
    console.log(array[count]);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Factorial of 5: ', factorialCalculator(5));
console.log('5th Fibonacci number is: ', fibonacciCalculator(5));
