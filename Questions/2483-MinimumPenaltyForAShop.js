/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let preNo = getPreNoArray(customers);
    let suffYes = getSuffYesArray(customers);

    return getMinIndex(preNo, suffYes);
};

function getPreNoArray(customers) {
    let preNo = [];
    preNo.push(0);
    for(let i = 0; i < customers.length; i++) {
        if(customers[i] === 'N') {
            preNo.push(preNo[preNo.length-1]+1);
        } else {
            preNo.push(preNo[preNo.length-1]);
        }
    }
    // console.log("preNo = ", preNo);
    return preNo;
}

function getSuffYesArray(customers) {
    let suffYes = [];
    suffYes.push(0);
    for(let i = customers.length-1; i>=0; i--) {
        if(customers[i] === 'Y') {
            suffYes.push(suffYes[suffYes.length-1]+1);
        } else {
            suffYes.push(suffYes[suffYes.length-1]);
        }
    }
    suffYes.reverse();
    // console.log(suffYes);

    return suffYes;
}

function getMinIndex(preNo, suffYes) {
    let minimumPenalty = Number.MAX_VALUE;
    let minIndex = -1;

    for(let i = 0;i < preNo.length; i++) {
        let penalty = preNo[i] + suffYes[i];
        // console.log("penalty = ", penalty);
        if(penalty < minimumPenalty) {
            minIndex = i;
            minimumPenalty = penalty;
        }
    }

    return minIndex;
}

// console.log(bestClosingTime("YYNY")); // 2
// console.log(bestClosingTime("YYYY")); // 4
// console.log(bestClosingTime("NNNN")); // 0