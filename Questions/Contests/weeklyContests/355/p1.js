var splitWordsBySeparator = function(words, separator) {
    let arr = [];
    for(let word of words) {
        arr = arr.concat(word.split(separator));
    }

    return arr.filter(a => a!=="");
};

console.log(splitWordsBySeparator(["$easy$","$problem$"],"$"));
console.log(splitWordsBySeparator(["one.two.three","...four.five....","six"],"."));
console.log(splitWordsBySeparator(["|||"], "|"));