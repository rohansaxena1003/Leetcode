/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return nums[getPivot(nums)];
};

function getPivot(arr) {
    let n = arr.length;
    let s = 0, e= n-1;
    while(s < e) {
        let m = Math.floor((e-s)/2) + s;
        if(arr[m] > arr[n-1]) {
            s = m+1;
        } else if(arr[m] < arr[n-1]) {
            e = m-1;
        }
    }

    if(s == e) {
        if(arr[s] > arr[n-1]) s++;
    }
    return s;
}