/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let arr1 = [], arr2 = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n%i == 0) {
            arr1.push(i);
            if(i != n/i) {
                arr2.push(n/i);
            }
            
        }
    }

    let ans = arr1.concat(arr2.reverse())[k-1];
    if(ans == undefined) {
        return -1;
    }

    return ans;

};