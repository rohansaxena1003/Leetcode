/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(arr, x) {
    let n = arr.length;
    let OverallMax = arr[0];
    let score = arr.map(i => 0);
    score[0] = arr[0];
    score.push(Number.MIN_VALUE);
    let maxOddScoreIdx = n, maxEvenScoreIdx = n;
    if(score[0]%2 === 0) {
        maxEvenScoreIdx = 0;
    } else {
        maxOddScoreIdx = 0;
    }

    for(let i = 1; i< arr.length; i++) {
        let even = false, odd = false;
        if(arr[i] %2 ===0) even = true;
        else odd = true;

        if(even) {
            let max1 = arr[i] + score[maxOddScoreIdx] - x;
            let max2 = arr[i] + score[maxEvenScoreIdx];
            score[i] = Math.max(max1, max2);
            // if(i ==2)
            //  console.log('max1: ' + max1 + " max2 : " + max2 + " i:" + i + " maxEvenScoreIdx:" + maxEvenScoreIdx);
            if(maxEvenScoreIdx === n) {
                score[i] = max1;
                maxEvenScoreIdx = i;
            }

            if(score[i] >= score[maxEvenScoreIdx]) {
                maxEvenScoreIdx = i;
            }
            // if(i === 1) console.log(" maxEvenScoreIdx:" + maxEvenScoreIdx +" " + score[maxEvenScoreIdx]);
            
        }

        if(odd) {
            let max1 = arr[i] + score[maxEvenScoreIdx] - x;
            let max2 = arr[i] + score[maxOddScoreIdx];
         
            
            score[i] = Math.max(max1, max2);
            if(maxOddScoreIdx == n) {
                score[i] = max1;
                maxOddScoreIdx = i;
            }

            if(score[i] >= score[maxOddScoreIdx]) {
                maxOddScoreIdx = i;
            }
        }

        console.log('idx = ' + i + ", maxODD:" + maxOddScoreIdx  + ', maxEVEN: ' + maxEvenScoreIdx);

        OverallMax = Math.max(OverallMax, score[i]);
    }
    
    console.log(score);
    return OverallMax;
};

// console.log(maxScore([2,4,6,8], 3));

console.log(maxScore([3,2,6,1,9,4], 5));
console.log(maxScore([2,4,7], 5));