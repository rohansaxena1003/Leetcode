/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let s = 1, e = piles.reduce( (a,b) => Math.max(a,b));
    // console.log(`s=${s}, e=${e}`);
    let minPossAns = 0;

    while(s <= e) {
        let m = Math.floor(((e-s)/2) + s);
        let timeTaken = getHours(piles, m) ;
        console.log(`s=${s}, e=${e}, m=${m}, hours=${timeTaken}`);

        if(timeTaken <= h ) { // This means koko is eating bananas faster than needed
                             // Therefore, DECREASE speed.
            minPossAns = m;
            e = m-1;

        } else {
            s = m+1;
        }
    }

    return minPossAns;
};

function getHours(piles, m) {
    let ans = 0;
    for(let p of piles) {
        ans = ans + Math.ceil(p/m);
    }

    return ans;
}

console.log(minEatingSpeed([3,6,7,11], 8));

console.log(minEatingSpeed([30,11,23,4,20], 5));

console.log(minEatingSpeed([30,11,23,4,20], 6));

// console.log(minEatingSpeed([30,11,23,4,20], 5));

// console.log(minEatingSpeed([30,11,23,4,20], 5));