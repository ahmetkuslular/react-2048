import { cloneDeep } from 'lodash';

import directions from '../constants/directios';
import newCell from './newCell';
import { rotateGrid, flipGrid, compareGrid, operate } from './gridHelpers';

let score = 0;
let bestScore = 0;

function move(grid, direction) {
  const size = grid[0].length;
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

  let oldGrid = cloneDeep(grid);
  for (let i = 0; i < size; i++) {
    grid[i] = operate(grid[i]);
  }

  const changed = compareGrid(oldGrid, grid);

  if (flipped) {
    grid = flipGrid(grid);
  }

  if (rotated) {
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
  }

  if (changed) {
    grid = newCell(grid);
  }

  const gameOver = isGameOver(grid);

  return { cells: grid, score, bestScore, gameOver };
}

function isGameOver(grid) {
  const size = grid[0].length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
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

function scoreIncrease(point) {
  score += point;
  if (score > bestScore) {
    bestScore = score;
  }
}

function setScore(newScore) {
  score = newScore;
}

export { scoreIncrease, setScore };
export default move;
