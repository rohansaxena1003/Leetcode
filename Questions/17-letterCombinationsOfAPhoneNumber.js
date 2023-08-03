/**
 * @param {string} digits
 * @return {string[]}
 */

const obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv", 
    9: "wxyz"
}

var letterCombinations = function(digits) {
    let ans = [];

    function combine(i, n, ansStr) {
        if(n > 0 && ansStr.length == n) {
            // console.log(ansStr);
            ans.push(ansStr);
            return;
        }

        while(i < n) {
            let phone = obj[digits[i]];
            for(let j = 0; j < phone.length; j++) {
                combine(i+1, n, ansStr + phone[j]);
            }
            i++;
        }

        return;
    }

    combine(0, digits.length, "");
    return ans;
};

console.log(letterCombinations("23"));
// console.log(ans);