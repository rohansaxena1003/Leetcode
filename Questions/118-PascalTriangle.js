/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ansArray = [];
    for(let i = 0; i < numRows;i++) {
        let tempArray = [];
        for(let j = 0; j <=i ; j++) {
            if(j==0 || j==i) {
                tempArray.push(1);
            } else {
                let number = ansArray[i-1][j-1] + ansArray[i-1][j];
                tempArray.push(number);
            }
        }
        ansArray.push(tempArray);
    }
    return ansArray;
};

console.log(generate(7));