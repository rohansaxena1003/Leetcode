/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const dq = [];
    const res = [];

    for (let i = 0; i < k; i++) {
        while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
            dq.pop();
        }
        dq.push(i);
    }
    res.push(nums[dq[0]]);

    for (let i = k; i < nums.length; i++) {
        if (dq[0] === i - k) {
            dq.shift();
        }
        while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
            dq.pop();
        }

        dq.push(i);
        res.push(nums[dq[0]]);
    }
    // Return the result as an array.
    return res;
}
