import { cloneDeep } from 'lodash';
import directions from './directios';

let grid = [];
let score = 0;

const getRandomCoord = size => {
  return Math.floor(Math.random() * size);
};

function blankGrid() {
  grid = Array.from(new Array(4), () => Array.from(new Array(4), () => 0));
  return grid;
}

function setup() {
  grid = blankGrid();
  addNumber();
  addNumber();
  return grid;
}

function isGameOver() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
      if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
      if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
        return false;
      }
    }
  }
  return true;
}

function addNumber() {
  let options = [];

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (grid[x][y] === 0) {
        options.push({ x, y });
      }
    }
  }
  if (options.length > 0) {
    const spot = options[getRandomCoord(options.length)];
    const value = getRandomCoord(2) > 0 ? 2 : 4;
    grid[spot.x][spot.y] = value;
  }
}

function compare(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function slide(row) {
  debugger;
  let arr = row.filter(val => val);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function flipGrid(grid) {
  for (let i = 0; i < 4; i++) {
    grid[i].reverse();
  }

  return grid;
}

function rotateGrid(grid) {
  const newGrid = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

function keyPressed(direction) {
  let flipped = false;
  let rotated = false;

  if (direction === directions.LEFT) {
    grid = flipGrid(grid);
    flipped = true;
  } else if (direction === directions.DOWN) {
    grid = rotateGrid(grid);
    rotated = true;
  } else if (direction === directions.UP) {
    grid = rotateGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
  }

  let past = cloneDeep(grid);
  for (let i = 0; i < 4; i++) {
    grid[i] = operate(grid[i]);
  }

  const changed = compare(past, grid);

  if (flipped) {
    grid = flipGrid(grid);
  }

  if (rotated) {
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
  }

  if (changed) {
    addNumber();
  }

  const gameOver = isGameOver();

  if (gameOver) {
    console.log('GAME OVER');
  }

  return { grid, score };
}

function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}
function combine(row) {
  for (let i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      score += row[i];
      row[i - 1] = 0;
    }
  }
  return row;
}

export { setup, keyPressed };
