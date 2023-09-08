/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
    numRows++;
    let prevArray;
    for(let i = 0; i < numRows;i++) {
        let tempArray = [];
        for(let j = 0; j <=i ; j++) {
            if(j==0 || j==i) {
                tempArray.push(1);
            } else {
                let number = prevArray[j-1] + prevArray[j];
                tempArray.push(number);
            }
        }
        prevArray = tempArray;
    }
    return prevArray;
};

// console.log(getRow(1));