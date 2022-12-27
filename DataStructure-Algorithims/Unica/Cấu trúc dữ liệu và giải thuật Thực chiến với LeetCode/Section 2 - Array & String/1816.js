var truncateSentence = function (s, k) {
    return s.split(' ').slice(0, k).join(' ');
};

console.log(
    'Leetcode 1816: ',
    truncateSentence('Hello how are you Contestant', 4)
);
