/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   const ans = [];
   const v = new Set();
   
   function backtracking(tempArr, v) {
        if(tempArr.length == nums.length) {
            ans.push([...tempArr]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(!v.has(i)) {
                v.add(i);
                tempArr.push(nums[i]);
                backtracking(tempArr, v);
                v.delete(i);
                tempArr.pop();
            }
        }
   }

   backtracking([], v);
   return ans;
};


console.log(permute([1,2,3,4]).length);

