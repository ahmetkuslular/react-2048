export function fontSizeCalculater(value) {
  const size = value < 100 ? 55 : value < 1000 ? 40 : value < 10000 ? 35 : 25;
  return size;
}

