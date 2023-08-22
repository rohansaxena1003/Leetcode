/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = [];
    while(columnNumber > 0) {
        let value = columnNumber % 26;
        if(value ==0) {
            value = 26;
            columnNumber -= 26;
        }
        let char = String.fromCharCode(64 + value);
        columnNumber = Math.floor(columnNumber / 26);
        ans.unshift(char);
        // console.log("char = ",char, ", value = ", value);
    }
    return ans.join("");
};

console.log(convertToTitle(2385)); // CMS