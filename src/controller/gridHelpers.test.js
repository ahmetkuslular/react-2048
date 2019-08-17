import { slideRow, combineRow, rotateGrid, flipGrid, compareGrid } from './gridHelpers';

describe('grid helpers test', () => {
  test('should slide a row', () => {
    expect(slideRow([2, 4, 0, 0])).toEqual([0, 0, 2, 4]);
    expect(slideRow([2, 4, 4, 0])).toEqual([0, 2, 4, 4]);
    expect(slideRow([2, 4, 4, 2])).toEqual([2, 4, 4, 2]);
    expect(slideRow([2, 0, 0, 2])).toEqual([0, 0, 2, 2]);
    expect(slideRow([0, 0, 0, 2])).toEqual([0, 0, 0, 2]);
    expect(slideRow([0, 0, 0, 2, 2])).toEqual([0, 0, 0, 2, 2]);
    expect(slideRow([4, 0, 0, 2, 2])).toEqual([0, 0, 4, 2, 2]);
    expect(slideRow([2, 4, 0, 0, 2])).toEqual([0, 0, 2, 4, 2]);
    expect(slideRow([2, 4, 0, 0, 2, 16])).toEqual([0, 0, 2, 4, 2, 16]);
    expect(slideRow([0, 0, 2, 0, 2, 0])).toEqual([0, 0, 0, 0, 2, 2]);
  });

  test('should combine a row', () => {
    expect(combineRow([2, 4, 0, 0])).toEqual([2, 4, 0, 0]);
    expect(combineRow([4, 4, 0, 0])).toEqual([0, 8, 0, 0]);
    expect(combineRow([4, 0, 0, 4])).toEqual([4, 0, 0, 4]);
    expect(combineRow([4, 0, 2, 2])).toEqual([4, 0, 0, 4]);
    expect(combineRow([0, 0, 0, 16, 16])).toEqual([0, 0, 0, 0, 32]);
  });

  test('should rotate a grid', () => {
    expect(rotateGrid([[0, 0, 2], [0, 0, 0], [0, 0, 0]])).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [2, 0, 0],
    ]);
    expect(rotateGrid([[0, 4, 2, 2], [2, 0, 0, 2], [2, 2, 4, 2], [0, 0, 2, 0]])).toEqual([
      [0, 2, 2, 0],
      [4, 0, 2, 0],
      [2, 0, 4, 2],
      [2, 2, 2, 0],
    ]);
  });
  test('should flip a grid', () => {
    expect(flipGrid([[0, 0, 2], [0, 0, 0], [0, 0, 0]])).toEqual([[2, 0, 0], [0, 0, 0], [0, 0, 0]]);
    expect(flipGrid([[0, 4, 2, 2], [2, 0, 0, 2], [2, 2, 4, 2], [0, 0, 2, 0]])).toEqual([
      [2, 2, 4, 0],
      [2, 0, 0, 2],
      [2, 4, 2, 2],
      [0, 2, 0, 0],
    ]);
  });

  test('compare 2 grid', () => {
    expect(
      compareGrid(
        [[0, 0, 0, 2], [0, 0, 0, 2], [0, 0, 0, 0], [0, 2, 0, 0]],
        [[0, 0, 0, 2], [0, 0, 0, 2], [0, 0, 0, 0], [0, 2, 0, 0]],
      ),
    ).toBe(false);
    expect(compareGrid([[0, 0, 2], [0, 0, 0], [0, 0, 0]], [[0, 0, 2], [0, 0, 0], [0, 0, 0]])).toBe(
      false,
    );
    expect(
      compareGrid(
        [[0, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 0], [0, 2, 0, 0]],
        [[0, 0, 0, 2], [0, 0, 0, 2], [0, 0, 0, 0], [0, 2, 0, 0]],
      ),
    ).toBe(true);
  });
});
