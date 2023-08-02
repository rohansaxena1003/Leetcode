/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function (n, k) {
    const ans = [];

    function combinations(n, k, start, arrK) {
        if (arrK.length == k) {
            ans.push([...arrK]);
            return;
        }

        for (let i = start; i <= n; i++) {
            arrK.push(i);
            combinations(n, k, i + 1, arrK);
            arrK.pop();
        }
    }

    combinations(n, k, 1, []);
    return ans;
};

console.log(combine(4, 2));