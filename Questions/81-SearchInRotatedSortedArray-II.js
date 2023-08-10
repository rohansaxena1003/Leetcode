function search(nums, target) {
    let n = nums.length;
    if (n == 0) return false;
    let end = n - 1;
    let start = 0;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] == target) {
            return true;
        }

        if (!isBinarySearchHelpful(nums, start, nums[mid])) {
            start++;
            continue;
        }
        // which array does pivot belong to.
        let pivotArray = existsInFirst(nums, start, nums[mid]); // boolean

        // which array does target belong to.
        let targetArray = existsInFirst(nums, start, target);
        if (pivotArray ^ targetArray) { // If pivot and target exist in different sorted arrays, recall that xor is true when both operands are distinct
            if (pivotArray) {
                start = mid + 1; // pivot in the first, target in the second
            } else {
                end = mid - 1; // target in the first, pivot in the second
            }
        } else { // If pivot and target exist in same sorted array
            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false;
}

// returns true if we can reduce the search space in current binary search space
function isBinarySearchHelpful( arr,  start,  element) {
    return arr[start] != element;
}

// returns true if element exists in first array, false if it exists in second
function existsInFirst(arr,  start,  element) {
    return arr[start] <= element;
}

// console.log(search([0,0,1,2,3,3,3,3,4,5,6,6,6], 8)); // 4
console.log(search([6,6,0,0,1,2,3,3,3,3,4,5,6], 8)); // 4
// console.log(search([4,5,6,7,0,1,2], 0)); // 4
// console.log(search([4,5,6,7,8,9], 2)); // -1
// console.log(search([4,5,6,7,8,9,10], 6)); // 2
// console.log(search([4,5,6,7,8,0,1,2], 2)); // 7
// console.log(search([8,0,1,2,3,5], 2)); // 3
// console.log(search([8,2], 2)); // -1