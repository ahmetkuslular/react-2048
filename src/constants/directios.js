const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

export const mapKeyCodeToDirection = {
  KeyA: directions.LEFT,
  KeyS: directions.DOWN,
  KeyD: directions.RIGHT,
  KeyW: directions.UP,

  ArrowLeft: directions.LEFT,
  ArrowDown: directions.DOWN,
  ArrowRight: directions.RIGHT,
  ArrowUp: directions.UP,
};

export default directions;
