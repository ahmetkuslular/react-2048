function getRandom(size) {
  return Math.floor(Math.random() * size);
}

function newCell(grid) {
  let options = [];
  const size = grid[0].length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] === 0) {
        options.push({ x: i, y: j });
      }
    }
  }
  if (options.length > 0) {
    const spot = options[getRandom(options.length)];
    const value = getRandom(2) > 0 ? 2 : 4;
    grid[spot.x][spot.y] = value;
  }
  return grid;
}

export default newCell;
