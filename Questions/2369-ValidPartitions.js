/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    let memo = new Map();
    let n = nums.length;
    memo.set(-1, true);

    // Determine if the prefix array nums[0 ~ i] has a valid partition
    function prefixIsValid(nums, i) {
        if (memo.has(i)) {
            return memo.get(i);
        }
        let ans = false;

        // Check 3 possibilities
        if (i > 0 && nums[i] == nums[i - 1]) {
            ans |= prefixIsValid(nums, i - 2);
        }
        if (i > 1 && nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) {
            ans |= prefixIsValid(nums, i - 3);
        }
        if (i > 1 && nums[i] == nums[i - 1] + 1 && nums[i - 1] == nums[i - 2] + 1) {
            ans |= prefixIsValid(nums, i - 3);
        }
        memo.set(i, ans);
        return ans;
    }

    return prefixIsValid(nums, n - 1);
};



    

