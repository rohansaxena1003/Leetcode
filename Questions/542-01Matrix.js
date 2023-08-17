/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const max = mat.length * mat[0].length;
    let dis = JSON.parse(JSON.stringify(mat));
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                dis[i][j] = 0;
            } else {
                const upCell = i > 0 ? dis[i - 1][j] : max;
                const leftCell = j > 0 ? dis[i][j - 1] : max;
                dis[i][j] = Math.min(upCell, leftCell) + 1;
            }
        }
    }
    
    
    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] === 0) {
                dis[i][j] = 0;
            } else {
                const downCell = i < mat.length - 1 ? dis[i + 1][j] : max;
                const rightCell = j < mat[0].length - 1 ? dis[i][j + 1] : max;
                dis[i][j] = Math.min((Math.min(downCell, rightCell) + 1), dis[i][j]);
            }
        }
    }
    
    return dis;
};