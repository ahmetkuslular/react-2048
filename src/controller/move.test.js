import move from './move';
import directions from 'constants/directions';

const finalPositions = {
  [directions.UP]: [[0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  [directions.DOWN]: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0]],
  [directions.LEFT]: [[0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  [directions.RIGHT]: [[0, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0]],
};

const initGrid = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

describe('move function', () => {
  Object.keys(directions).forEach(direction => {
    it(`moving ${direction}`, () => {
      const { cells } = move(initGrid, direction, true);
      expect(cells).toEqual(finalPositions[direction]);
    });
  });
});
