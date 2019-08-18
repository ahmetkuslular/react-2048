import newCell from './newCell';
import { blankGrid } from './gridHelpers';
import { setScore } from './move';

function gameInit(size) {
  let grid = blankGrid(size);
  setScore(0);
  grid = newCell(grid);
  grid = newCell(grid);
  return grid;
}

export default gameInit;
