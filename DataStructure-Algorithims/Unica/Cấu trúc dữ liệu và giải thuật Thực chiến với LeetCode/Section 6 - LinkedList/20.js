var isValid = function (s) {
    let arrInput = [...s];
    let arrResult = [];
    for (let i = 0; i < arrInput.length; i++) {
        let temp = arrInput[i];
        switch (temp) {
            case '(':
                arrResult.push(')');
                break;
            case '[':
                arrResult.push(']');
                break;
            case '{':
                arrResult.push('}');
                break;
            default:
                if (temp != arrResult.pop()) {
                    return false;
                }
                break;
        }
    }
    return !arrResult.length;
};
