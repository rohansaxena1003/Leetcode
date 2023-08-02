/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getPermutation = function(n, k) {
    let ans = "";
    const v = new Set();
    let permNumber = 0;

    function backtracking(str, v) {
         if(str.length == n) {
             permNumber++;
             if(permNumber === k) {
                ans = str;
             }
             return;
         }
 
         for(let i = 1; i <= n; i++) {
             if(!v.has(i)) {
                 v.add(i);
                 str+= i;
                 backtracking(str, v);
                 v.delete(i);
                 str = str.slice(0, str.length -1);
             }
         }
    }
 
    backtracking("", v);
    return ans;
 };
 
 
 console.log(getPermutation(3, 3));
 
 