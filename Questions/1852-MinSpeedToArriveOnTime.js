/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let min = 1;
    let max = dist.reduce( (a,b) => Math.max(a,b));
    

    while(min <= max) {
        let mid = Math.floor( ((max-min)/2) + min );
        console.log(mid);
        let hcal = totalTime(dist, mid);

        if(hcal == hour) {
            return mid;
        } else if(hcal > hour) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
};

function totalTime(dist, time) {
    let hcal = 0;

    for(let d of dist ) {
        hcal = hcal + Math.ceil(d/time);
    }

    return hcal;
}

// console.log(minSpeedOnTime([1,5,8,7,4], 6));
// console.log(minSpeedOnTime([1,3,2], 6));
// console.log(minSpeedOnTime([1,5,8,7,4], 6));
console.log(minSpeedOnTime([1,3,2], 2.7));
