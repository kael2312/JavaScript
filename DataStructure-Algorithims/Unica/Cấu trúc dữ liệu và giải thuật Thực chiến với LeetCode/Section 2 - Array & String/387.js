/*
 *387. First Unique Character in a String
 *Given a string s, find the first non-repeating character in it and return its index.
 *If it does not exist, return -1.

*Example 1:
*Input: s = "leetcode"
*Output: 0
 */

var firstUniqChar = function (s) {
    let arrCharacter = [...s];
    let index;
    for (let i = 0; i < arrCharacter.length; i++) {
        if (
            s.indexOf(arrCharacter[i]) == i &&
            s.indexOf(arrCharacter[i], i + 1) === -1
        ) {
            index = arrCharacter.findIndex((x) => x === arrCharacter[i]);
            break;
        } else {
            index = -1;
        }
    }
    return index;
};

let s = 'aabb';
console.log(firstUniqChar(s));
