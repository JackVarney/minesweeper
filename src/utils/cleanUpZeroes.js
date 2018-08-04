import { getSurroundingMineCount, iterateSurroundingGrid } from '.';
const cleanUpZeroes = (point, tiles) => {
  iterateSurroundingGrid(
    (x, y) => {
      const tile = tiles[x][y];

      if (!tile.hasBeenSweeped) {
        tile.hasBeenSweeped = true;

        if (getSurroundingMineCount(tile, tiles) === 0) {
          tiles = cleanUpZeroes(tile.point, tiles);
        }
      }
    },
    point,
    tiles.length
  );

  return tiles;
};

export default cleanUpZeroes;
