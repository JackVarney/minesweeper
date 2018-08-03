import { makeTiles } from '../utils';

export default {
  setNewTiles: () => state => ({ tiles: makeTiles() }),
  updateTile: tile => state => {
    console.log(tile);
    const { tiles } = state;
    const { x, y } = tile.point;

    tiles[x][y] = tile;

    return { tiles };
  },
};
