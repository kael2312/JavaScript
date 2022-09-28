/*
*1662. Check If Two String Arrays are Equivalent
*Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
*A string is represented by an array if the array elements concatenated in order forms the string.

*Example 1:
*Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
*Output: true
*Explanation:
*word1 represents string "ab" + "c" -> "abc"
*word2 represents string "a" + "bc" -> "abc"
*The strings are the same, so return true.
*/

var arrayStringsAreEqual = function (word1, word2) {
    let stringWord1;
    let stringWord2;
    for (let i = 0; i < word1.length; i++) {
        stringWord1 += word1[i];
    }

    for (let i = 0; i < word2.length; i++) {
        stringWord2 += word2[i];
    }

    if (stringWord1 === stringWord2) return true;
    return false;
};

let word1 = ['ab', 'c'];
let word2 = ['a', 'bc'];
console.log(arrayStringsAreEqual(word1, word2));
