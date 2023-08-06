/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = "";
    for(let c of s) {
        if(c === 'i') {
            str = str.split('').reverse().join("");
        } else {
            str+= c;
        }
    }
    
    return str;
};