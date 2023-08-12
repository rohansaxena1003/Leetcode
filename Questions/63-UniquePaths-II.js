function uniquePathsWithObstacles(obstacleGrid) {
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    let fGrid = new Array(row).fill(0).map(() => new Array(col).fill(0));
    if (obstacleGrid[0][0] == 1) {
        fGrid[0][0] = 0;
    } else {
        fGrid[0][0] = 1;
    }

    for (let i = 1; i < row; i++) {
        if (obstacleGrid[i][0] == 1 || obstacleGrid[i - 1][0] == 1 || fGrid[i - 1][0] == 0) {
            fGrid[i][0] = 0;
        } else {
            fGrid[i][0] = 1;
        }
    }

    for (let j = 1; j < col; j++) {
        if (obstacleGrid[0][j - 1] == 1 || obstacleGrid[0][j] == 1 || fGrid[0][j - 1] == 0) {
            fGrid[0][j] = 0;
        } else {
            fGrid[0][j] = 1;
        }

    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] == 0) {
                fGrid[i][j] = fGrid[i - 1][j] + fGrid[i][j - 1];
            }
        }
    }
    return fGrid[row - 1][col - 1];
}

console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]));