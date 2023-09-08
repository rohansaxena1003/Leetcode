/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length > 1) {
        let array = [];
        for(let i = 0; i < nums.length-1; i++) {
            array.push((nums[i] + nums[i+1]) % 10);
        }
        nums = array;
    }

    return nums[0];
    
};

console.log(triangularSum([1,2,3,4,5]));
console.log(triangularSum([1,4,2,5,3]));