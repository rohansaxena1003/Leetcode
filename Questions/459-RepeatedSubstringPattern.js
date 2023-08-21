/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            const pattern = s.substring(0, i).repeat(n / i);
            if (s === pattern) {
                return true;
            }
        }
    }
    return false;
}