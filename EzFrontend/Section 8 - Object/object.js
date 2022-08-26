const perObj = {
    name: "EzFrontend",
    age: 18,
    mark: {
        math: 10,
        english: 8,
    },
};
const per2Obj = {
    name: "EzFrontend",
    age: 18,
    mark: {
        math: 3,
        english: 3,
        history: 3,
    },
};

const emptyObj = {};

function isEmptyObj(obj) {
    if (Object.keys(obj).length > 0) return true;
    return false;
}

function calAvgMark(obj) {
    let sumMark = 0;
    const markObj = obj.mark;
    const countKey = Object.keys(markObj).length;
    for (const key in markObj) {
        sumMark += markObj[key];
    }
    return sumMark / countKey;
}

console.log(isEmptyObj(perObj));
console.log(isEmptyObj(emptyObj));
console.log(calAvgMark(perObj));
console.log(calAvgMark(per2Obj));
