import { setSize } from './move';
import { blankGrid } from './gridHelpers';
import newCell from './newCell';

function gameInit(size) {
  let grid = blankGrid(size);
  grid = newCell(grid);
  grid = newCell(grid);
  return grid;
}

export default gameInit;
