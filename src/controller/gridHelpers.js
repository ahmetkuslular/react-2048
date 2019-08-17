import { scoreIncrease } from './move';

function blankGrid(size) {
  const grid = Array.from(new Array(size), () => Array.from(new Array(size), () => 0));
  return grid;
}

function slideRow(row) {
  let arr = row.filter(val => val);
  let missing = row.length - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function combineRow(row) {
  for (let i = row.length - 1; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b && (a !== 0 || b !== 0)) {
      row[i] = a + b;
      scoreIncrease(row[i]);
      row[i - 1] = 0;
    }
  }
  return row;
}

function rotateGrid(grid) {
  const size = grid[0].length;
  const newGrid = blankGrid(size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

function flipGrid(grid) {
  const size = grid[0].length;
  for (let i = 0; i < size; i++) {
    grid[i].reverse();
  }
  return grid;
}

// can be using isEqual(oldGrid.sort(), newGrid.sort()) (LODASH)
function compareGrid(oldGrid, newGrid) {
  const size = oldGrid[0].length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (oldGrid[i][j] !== newGrid[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function operate(row, score) {
  row = slideRow(row);
  row = combineRow(row, score);
  row = slideRow(row);
  return row;
}

export { slideRow, combineRow, blankGrid, rotateGrid, flipGrid, compareGrid, operate };
