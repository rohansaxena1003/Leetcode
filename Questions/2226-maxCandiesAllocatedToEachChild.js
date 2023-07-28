/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let s = 1, e = Math.floor(candies.reduce( (a,b) => a + b) / k);
    // console.log(e);
    let minPossAns = 0;

    while(s <= e) {
        let m = Math.floor(((e-s)/2) + s);
        let piles = getPiles(candies, m);
        // console.log("m = " + m + ", piles = " + piles);
        if(piles >= k) {
            minPossAns = m;
            s = m+1;
        } else {
            e = m-1;
        }
    }

    return minPossAns;
};

function getPiles(candies, m) {
    let piles = 0;
    for(let c of candies) {
        piles = piles + Math.floor(c/m);
    }
    return piles;
    
    // return candies.map(a => Math.floor(a/m)).reduce((a,b) => a + b);
}


console.log(maximumCandies([5,8,6], 3)); // 5
console.log(maximumCandies([2,5], 11)); // 0
console.log(maximumCandies([5,8,6], 4)); // 4
console.log(maximumCandies([5,8,6], 6)); // 2
// console.log(maximumCandies([5,8,6], 4));
