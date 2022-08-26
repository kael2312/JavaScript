// easy FRontend => Easy Frontend

function stringCapitalize(str) {
    let strArr = str.trim().toLowerCase().split(" ");
    let stringCap = strArr.map((element) => {
        return element.replace(element[0], element[0].toUpperCase());
    });
    return stringCap.join(" ");
}

console.log(stringCapitalize("     aabDD easy FRontend           "));
