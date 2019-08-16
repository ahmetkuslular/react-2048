import newCell from './newCell';
import { blankGrid } from './gridHelpers';

function gameInit(size) {
  let grid = blankGrid(size);
  grid = newCell(grid);
  grid = newCell(grid);
  return grid;
}

export default gameInit;
