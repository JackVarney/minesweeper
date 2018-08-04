import { iterateSurroundingGrid } from '.';

const hasMine = tiles => (x, y) => (tiles[x][y].hasMine ? 1 : 0);

export default (tile, tiles) => {
  var output = 0;

  iterateSurroundingGrid(
    (x, y) => {
      output += hasMine(tiles)(x, y);
    },
    tile.point,
    tiles.length
  );

  return output;
};
