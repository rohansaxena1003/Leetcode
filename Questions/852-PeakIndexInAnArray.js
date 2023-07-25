/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    return peakBinarySearch(arr);
};

function peakBinarySearch(arr) {
    let s = 0, e = arr.length - 1;
    while(s<=e) {
        let m = Math.floor(((e-s)/2) + s);
        if(m==0) return 1;
        if(m==arr.length-1) return arr.length-2;
        
        if(arr[m] > arr[m-1] && arr[m] > arr[m+1]) {
            return m;
        } else if(arr[m] > arr[m-1] && arr[m] < arr[m+1]) {
            s = m+1;
        } else {
            e = m-1;
        }
    }

    return -1;
}

console.log(peakIndexInMountainArray([0,2,4,6,8,10,9,7]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,10,5,2]));
console.log(peakIndexInMountainArray([3,5,3,2,0]));
console.log(peakIndexInMountainArray([1,2,3,4,3]));
