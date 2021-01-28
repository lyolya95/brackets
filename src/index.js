module.exports = function check(str, bracketsConfig) {
    let array = bracketsConfig.flat();
    let newArray = [];
    const lengthStr = str.length;
    for (let i = 0; i < bracketsConfig.flat().length / 2; i++) {
        newArray.push(array.splice(0, 2).join(''))
    }

    for (let i = 0; i < lengthStr + 1; i++) {
        while (str.includes(newArray[i])) {
            str = str.replace(newArray[i], '');
        }
        newArray.push(newArray[i])
    }

    return !str;
}
