import state from '../state';

export default (cb, { x, y }, length = state.tiles.length) => {
  const gridEnd = length - 1;

  const rowStart = x === 0 ? x : x - 1;
  const rowEnd = x === gridEnd ? x : x + 1;

  const colStart = y === 0 ? y : y - 1;
  const colEnd = y === gridEnd ? y : y + 1;

  for (let i = rowStart; i <= rowEnd; i += 1) {
    for (let j = colStart; j <= colEnd; j += 1) {
      if (i === x && j === y) continue;
      else cb(i, j);
    }
  }
};
