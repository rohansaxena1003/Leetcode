/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
     let dp =  Array(n + 1).fill(0).map(() => Array(goal + 1).fill(0))
    let mod = 10**9 + 7;
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= goal; j++){
            dp[i][j] = (dp[i-1][j-1] * (n - i + 1) + dp[i][j - 1] * Math.max(i - k, 0)) % mod
        }
    }
    return dp[n][goal];
};