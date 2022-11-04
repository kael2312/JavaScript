var isValid = function (s) {
    let arrInput = [...s];
    let arrResult = [];
    for (let i = 0; i < arrInput.length; i++) {
        let temp = arrInput[i];
        if (temp == '(' || temp == '[' || temp == '{') {
            arrResult.push(temp);
        } else {
            let firstItem = arrResult[arrResult.length - 1];
            if (
                (firstItem == '(' && temp == ')') ||
                (firstItem == '[' && temp == ']') ||
                (firstItem == '{' && temp == '}')
            ) {
                arrResult.pop();
            } else {
                return false;
            }
        }
    }
    return !arrResult.length;
};

let s = '{[]}';
console.log(isValid(s));
