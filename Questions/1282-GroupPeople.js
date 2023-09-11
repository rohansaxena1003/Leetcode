/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

function splitArray(array, chunkSize, answer) {
    for (let i = 0; i < array.length; i = i + chunkSize) {
        answer.push(array.slice(i, i + chunkSize));
    }
    return answer;
}

var groupThePeople = function (groupSizes) {
    let map = new Map();
    let n = groupSizes.length;
    for (let i = 0; i < n; i++) {
        if (!map.has(groupSizes[i])) {
            map.set(groupSizes[i], []);
        }

        map.get(groupSizes[i]).push(i);
    }

    // console.log(map);
    let answer = [];    
    for (const [key, value] of map) {
        answer = splitArray(value, key, answer);
    }

    return answer;
};


// console.log(groupThePeople([2, 1, 3, 3, 3, 2, 3, 3, 3]));