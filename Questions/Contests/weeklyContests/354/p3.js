
var minimumIndex = function(nums) {
    let obj= maxFreqElement(nums);
    let n = nums.length;
    let val = obj.val, f = obj.f;
    console.log("val & f are~",val,f);
    let currFreq = 0;
    for(let i = 0; i<n;i++) {
        if(nums[i] === val) {
            currFreq++;
        }
        
        if(check(n,i,currFreq,f)) {
            return i;
        }
        
    }

    return -1;
};

function check(n,i, currFreq,f) {
    let n1 = i+1;
    let n2 = n - n1;
    let f1 = currFreq;
    let f2 = f - currFreq;

    if(f1*2 > n1 && f2*2 > n2) {
        return true;
    } else {
        return false;
    }
}

function maxFreqElement(arr) {
    let val = -1, maxF = 0;
    
    let map = new Map();

    for(let e of arr) {
        if(map.has(e)) {
            map.set(e, map.get(e) + 1);
        } else{
            map.set(e,1);
        }

        let f = map.get(e);
        if(f >=maxF) {
            maxF = f;
            val = e;
        }
    }

    let f = 0;
    for(let e of arr) {
        if( e == val) {
            f++;
        }
    }

    return {val , f};
}

// console.log(maxFreqElement([1,2,1,4,1,5,1]));
// console.log(maxFreqElement([2,1,3,1,1,5,1]));
// console.log(maxFreqElement([2,1,3,1,5,1,1]));

console.log(minimumIndex([1,2,1,4,1,5,1]));
console.log(minimumIndex([1,1,2,2,2,1,2]));
console.log(minimumIndex([2,1,3,1,1,1,7,1,2,1]));
console.log(minimumIndex([1,2,2,2]));
console.log(minimumIndex([3,3,3,3,7,2,2]));
console.log(minimumIndex([1,1,1,2]));