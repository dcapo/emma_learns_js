function getColumns(grid) {
    return grid[0].map((value, i) => {
        return grid.map(row => row[i])
    });
}

function getRows(grid) {
    return grid.slice(0);
}

function getDiagonals(grid) {
    let diagonalOne = [];
    let diagonalTwo = [];
    for (var i = 0; i < grid.length; i++) {
        diagonalOne.push(grid[i][i]);
        diagonalTwo.push(grid[i][grid.length - i - 1]);
    }
    return [diagonalOne, diagonalTwo];
}

function isAllUniform(array, targetValue) {
    return array.every(cell => cell.selection === targetValue);
}

function isAllX(array) {
    return isAllUniform(array, 'X');
}

function isAllO(array) {
    return isAllUniform(array, 'O');
}

function findWinner(grid) {
    let candidates = getRows(grid).concat(getColumns(grid)).concat(getDiagonals(grid));
    for (let i = 0; i < candidates.length; i++) {
        if (isAllX(candidates[i])) {
            return 'X';
        } else if (isAllO(candidates[i])) {
            return 'O';
        }
    }
    return false;
}
