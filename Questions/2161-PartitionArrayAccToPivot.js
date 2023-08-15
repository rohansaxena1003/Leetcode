/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lessThan = 0, equalTo = 0;
    for(let e of nums) {
        if(e < pivot) {
            lessThan++;
        } else if(e == pivot) {
            equalTo++;
        }
    };
    
    let i1 = 0, i2 = lessThan, i3 = lessThan+equalTo;
    console.log(lessThan, equalTo);
    
    let arr = new Array(nums.length);
    for(let e of nums) {
        if(e < pivot) {
            arr[i1] = e;
            i1++;
        } else if(e==pivot){
            arr[i2] = e;
            i2++;
        } else {
            arr[i3] = e;
            i3++;
        }
    }
    
    return arr;
};

console.log(pivotArray([9,12,5,10,14,3,10], 10));