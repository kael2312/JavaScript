var reverseString = function (s) {
    let j = s.length - 1;
    for (let i = 0; i < j; i++) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
    }
    return s;
};

let s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s));
