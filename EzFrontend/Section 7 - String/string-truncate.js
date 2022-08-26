function stringTruncate(str, maxLength) {
    let result;
    if (str.length <= maxLength) return str;
    const firstPath = str.substring(0, maxLength);
    result = `${firstPath}${String.fromCodePoint(8230)}`;

    return result;
}

console.log(stringTruncate("Le Nhat Hoang", 4));
console.log(stringTruncate("Easy", 4));
