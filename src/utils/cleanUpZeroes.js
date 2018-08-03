import { getSurroundingMineCount, iterateSurroundingGrid } from '.';
import state from '../state';

const cleanUpZeroes = (point, tiles = state.tiles) => {
  iterateSurroundingGrid((x, y) => {
    const tile = tiles[x][y];

    if (!tile.hasBeenSweeped) {
      tile.hasBeenSweeped = true;

      if (getSurroundingMineCount(tile) === 0) {
        tiles = cleanUpZeroes(tile.point, tiles);
      }
    }
  }, point);

  return tiles;
};

export default cleanUpZeroes;
