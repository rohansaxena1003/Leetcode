/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    
    if( Math.ceil(hour) < dist.length) {
        return -1;
    }

    let min = 1;
    let max = dist.reduce( (a,b) => Math.max(a,b)) * 100;
    

    while(min <= max) {
        let mid = Math.floor( ((max-min)/2) + min );
        console.log("mid = " + mid);
        let hcal = totalTime(dist, mid);
        console.log("hcal = " + hcal);
        if(hcal == hour) {
            return mid;
        } else if(hcal > hour) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    console.log("min=" + min + ",  max =" + max);
    return min;
};

function totalTime(dist, time) {
    let hcal = 0;

    for(let i = 0; i < dist.length - 1; i++ ) {
        hcal = hcal + Math.ceil(dist[i]/time);
    }

    return hcal + (dist[dist.length - 1]/time);
}

console.log(minSpeedOnTime([1,5,8,7,4], 6));
// console.log(minSpeedOnTime([1,3,2], 6));
console.log(minSpeedOnTime([1,3,2], 1.99));
// console.log(minSpeedOnTime([1,3,2], 2.7));
