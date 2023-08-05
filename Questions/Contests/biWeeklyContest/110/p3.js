/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function(nums) {
    let map = new Map();
    let n = nums.length;
    let maxSepOcc = 1; // maximum non joining oocurrence of a number
    let repeat = 0;
    for(let i = 0; i< nums.length;i++) {
        let number = nums[i];
        if(nums[(i - 1 + n) % n] !== nums[i] ) {
            console.log(i, "not equal");
            repeat = 0;
            if(map.has(number)) {
                map.set(number, map.get(number) + 1 );
                maxSepOcc = Math.max(maxSepOcc, map.get(number));
            } else {
                map.set(number, 1);
            }
        } else if((nums[(i - 1 + n) % n] === nums[i]  && repeat > 0 )) {
            console.log(i, "equal");
            if(map.has(number)) {
                map.set(number, map.get(number) + 1 );
                maxSepOcc = Math.max(maxSepOcc, map.get(number));
            }else {
                map.set(number, 1);
            }
        }
        
        else {
            repeat++;
            console.log(i,'in repeat');
        }
    }

    console.log("max",maxSepOcc);
    return Math.floor( (n - maxSepOcc + 1)/2 );

};

// console.log(minimumSeconds([1,2,3,4,5,6,7])); // 3
// console.log(minimumSeconds([1,1,3,4,5,6,7])); // 3
console.log(minimumSeconds([1,1,1,4,5,6,7])); // 3