/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */


// Find the number of valid pairs by greedy approach
function countValidPairs(nums, threshold) {
    let index = 0, count = 0;
    while (index < nums.length - 1) {
        // If a valid pair is found, skip both numbers.
        if (nums[index + 1] - nums[index] <= threshold) {
            count++;
            index++;
        }
        index++;
    }
    return count;
}

var minimizeMax = function(nums, p) {
    nums = nums.sort((a,b) => a-b);
    console.log(nums);
    let n = nums.length;
    let left = 0, right = nums[n - 1] - nums[0];

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        // If there are enough pairs, look for a smaller threshold.
        // Otherwise, look for a larger threshold.
        if (countValidPairs(nums, mid) >= p) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log(minimizeMax([10,1,2,7,1,3], 2));