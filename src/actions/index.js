import { makeTiles } from '../utils';

export default {
  setNewTiles: () => state => ({ tiles: makeTiles() }),
  updateTile: tile => state => {
    const { tiles } = state;
    const { x, y } = tile.point;

    tiles[x][y] = tile;
    const gameOver = tile.hasMine && tile.hasBeenSweeped;

    return { tiles, gameOver };
  },
};
