var balancedStringSplit = function (s) {
    let countL = 0;
    let countR = 0;
    let countResult = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') countR++;
        if (s[i] === 'L') countL++;
        if (countL == countR) countResult++;
    }

    return countResult;
};

let input1221 = 'RLRRLLRLRL';
console.log('Leetcode 1221: ', balancedStringSplit(input1221));
