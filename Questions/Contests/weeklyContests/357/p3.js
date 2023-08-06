/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    let n = grid.length;
    if(grid[0][0] == 1 || grid[n-1][n-1] == 1) {
        return 0;
    }
};