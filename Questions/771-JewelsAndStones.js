/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    for(let s of stones) {
        if(map.has(s)) {
            map.set(s,map.get(s)+1);
        } else {
            map.set(s,1);
        }
    }

    let ans = 0;
    for(let j of jewels) {
        if(map.has(j)) {
            ans = ans + map.get(j);
        }
    }

    return ans;
};

console.log(numJewelsInStones("zZ", "aAAbbbb"));