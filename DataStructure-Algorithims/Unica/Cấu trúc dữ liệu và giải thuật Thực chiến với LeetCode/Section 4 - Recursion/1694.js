var reformatNumber = function (number) {
    return Noname(number.replaceAll(/[ -]/g, ''));
};

function Noname(str) {
    if (str.length == 2 || str.length == 3) return str;
    if (str.length == 4) return str.substring(0, 2) + '-' + str.substring(2, 4);
    return str.substring(0, 3) + '-' + Noname(str.substring(3, str.length));
}

let string = '1-23-45 6';
console.log(reformatNumber(string));
