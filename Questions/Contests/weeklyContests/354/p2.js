var maximumBeauty = function(arr, k) {
    let n = arr.length;
    arr.sort( (a,b) => a - b);
    // console.log(arr);

    arr[0] = arr[0] + k;

    for(let i = 1;i < n; i++) {
        let v = arr[i];
        if(v-k <= arr[i-1]) {
            arr[i] = arr[i-1];
        } else {
            arr[i] = arr[i] + k;
        }
    }

    console.log(arr);

    maxLengthCount(arr,k)
    
};

function maxLengthCount(arr,k) {
    let count = 1, max = 1;
    for(let i = 1;i < n;i++) {
        if(arr[i] === arr[i-1]) {
            count++;
        } else {
            count = 1;
        }

        max = Math.max(max, count);
    }

    return max;
}

function arrMax()

console.log(maximumBeauty([4,6,1,2], 2));
console.log(maximumBeauty([1,1,1,1], 5));
console.log(maximumBeauty([1,7,4,10], 3));
console.log(maximumBeauty([7,4,1,10], 2));
console.log(maximumBeauty([11,6,1,16], 2));