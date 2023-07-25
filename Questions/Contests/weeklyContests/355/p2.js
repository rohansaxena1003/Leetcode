var maxArrayValue = function(arr) {
    
    let obj = getNewArray(arr);
    let callCount = 1;
    while(obj.mergeOperations > 0) {
        callCount++;
        obj = getNewArray(obj.arr);
    }
    console.log('callclount' + callCount);

    return  obj.arr.reduce((a,b) => Math.max(a,b) );
};

function getNewArray(arr) {
    let n = arr.length;
    let i = n-1;
    // let newArr = [];
    let mergeOperations = 0;
    while(i>=0) {
        let sum = arr[i];
        while(i>0 && arr[i] >= arr[i-1]) {
            mergeOperations++;
            sum+= arr[i-1];
            arr[i-1] += arr[i];
            arr[i] = -1;
            i--;
        }
        // newArr.push(sum);
        i--;
    }

    arr = arr.filter(a => a!=-1);
    return {arr, mergeOperations};
}

console.log(maxArrayValue([11,1,2,3,4,2,5,16,7]));
console.log(maxArrayValue([2,3,7,9,3]));
console.log(maxArrayValue([5,3,3]));
console.log(maxArrayValue([10,9,8]));
console.log(maxArrayValue([40,15,35,98,77,79,24,62,53,84,97,16,30,22,49]));
// console.log(mergeOperations());