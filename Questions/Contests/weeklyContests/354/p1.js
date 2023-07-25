var sumOfSquares = function(nums) {
    let n = nums.length;
    let ans = 0;
    for(let i = 0; i< n;i++){
        if(n%(i+1) === 0) {
            ans+= (nums[i] * nums[i]);
        }
    }

    return ans;
};

console.log(sumOfSquares([1,2,3,4]));
console.log(sumOfSquares([2,7,1,19,18,3]));
