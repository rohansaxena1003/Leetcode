/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length;
    let c = matrix[0].length;

    let i = 0;
    while(i < r && matrix[i][c-1] < target) {
        i++;
    }
console.log(matrix[i]);
    if( i == r) {
        return false;
    }

    return binarySearch(matrix[i], target);
};

function binarySearch(arr, target) {
    let s = 0, e = arr.length - 1;
    while(s <= e) {
        let mid = Math.floor((e-s)/2) + s;
        if(arr[mid]==target) {
            return true;
        } else if(arr[mid] > target) {
            e = mid-1;
        } else {
            s = mid + 1;
        }
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30));