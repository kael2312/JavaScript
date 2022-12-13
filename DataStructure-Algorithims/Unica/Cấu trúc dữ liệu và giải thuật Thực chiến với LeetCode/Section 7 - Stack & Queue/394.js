var decodeString = function (s) {
    let resultArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let tempArr = [];
            while (resultArr.at(-1) !== '[') {
                tempArr.unshift(resultArr.pop());
            }
            resultArr.pop();
            let loopStr = tempArr.join('');
            let newStr = '';
            let timeLoop = [];
            while (
                resultArr.length != 0 &&
                !isNaN(parseInt(resultArr.at(-1)))
            ) {
                timeLoop.unshift(resultArr.pop());
            }
            timeLoop = timeLoop.join('');
            for (let j = 0; j < timeLoop; j++) {
                newStr = newStr + loopStr;
            }
            for (let k = 0; k < newStr.length; k++) {
                resultArr.push(newStr[k]);
            }
        } else {
            resultArr.push(s[i]);
        }
    }

    return resultArr.join('');
};

let input394 = '100[leetcode]';
console.log('Leetcode 394: ', decodeString(input394));
