import { makeTiles } from '../utils';

export default {
  setNewTiles: () => () => ({ tiles: makeTiles() }),
  setGameOver: gameOver => () => ({ gameOver }),
  toggleUserIsFlaggingMines: () => state => ({
    userIsFlaggingMines: !state.userIsFlaggingMines,
  }),
  updateTile: tile => state => {
    const { tiles } = state;
    const { x, y } = tile.point;

    tiles[x][y] = tile;
    const gameOver = tile.hasMine && tile.hasBeenSweeped;

    return { tiles, gameOver };
  },
};
