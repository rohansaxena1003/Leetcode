var isGood = function(arr) {
    let n = arr.length - 1;
    arr.sort((a,b) => a - b);

    for(let i = 0;i < n+1; i++) {
        if(!checkPosition(i,n,arr)) {
            return false;
        }
    }

    return true;
};

function checkPosition(i,n,arr) {
    if(i==n) {
        if(arr[i] == n) {
            return true;
        } else {
            return false;
        }
        
    } else {
        if(arr[i] == i+1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isGood([2, 1, 3])); // f
console.log(isGood([1, 3, 3, 2])); // t
console.log(isGood([1, 1])); // t
console.log(isGood([3, 4, 4, 1, 2, 1])); //f
