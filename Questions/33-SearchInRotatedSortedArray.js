/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s= getPivot(nums);
    let idx = binarySearch(nums, 0, s-1, target);
    console.log("s = ", s);
    if(idx!= -1) {
        return idx;
    }

    return binarySearch(nums, s, nums.length-1, target);
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

function binarySearch(arr, s, e, tar) {
    while(s<=e) {
        let m = Math.floor((e-s)/2) + s;
        if(arr[m] == tar) {
            return m;
        } else if(arr[m] < tar) {
            s = m+1;
        } else if(arr[m] > tar) {
            e = m-1;
        }
    }

    return -1;
}

console.log(search([4,5,6,7,8,0,1,2], 8)); // 4
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,8,9], 2)); // -1
console.log(search([4,5,6,7,8,9,10], 6)); // 2
console.log(search([4,5,6,7,8,0,1,2], 2)); // 7
console.log(search([8,0,1,2,3,5], 2)); // 3
console.log(search([8,2], 2)); // -1