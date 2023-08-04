/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    function formString(i,open, close, ansStr) {
        if(close > open) {
            return;
        }

        if(ansStr.length === 2*n) {
            if(open === close) {
                // console.log(ansStr);
                result.push(ansStr);
            }
            return;
        }

        formString(i+1,open+1, close, ansStr + "(");
        formString(i+1,open, close+1, ansStr + ")");

    }

    formString(1, 0, 0, "");
    return result;
};

console.log(generateParenthesis(3));