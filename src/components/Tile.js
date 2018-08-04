import { h } from 'hyperapp';
import './Tile.scss';
import { getSurroundingMineCount, cleanUpZeroes } from '../utils';

let _updateTile;
let _setGameOver;

const onClick = (
  tile,
  tiles,
  userIsFlaggingMines,
  surroundingMineCount
) => () => {
  if (userIsFlaggingMines) {
    tile.flaggedForMine = !tile.flaggedForMine;
  } else if (!tile.flaggedForMine) {
    tile.hasBeenSweeped = true;

    if (tile.hasMine) {
      _setGameOver(true);
    } else if (surroundingMineCount === 0) {
      cleanUpZeroes(tile.point, tiles);
    }
  }

  _updateTile(tile);
};

export default ({
  tile,
  tiles,
  updateTile,
  userIsFlaggingMines,
  gameOver,
  setGameOver,
}) => {
  if (!_updateTile) _updateTile = updateTile;
  if (!_setGameOver) _setGameOver = setGameOver;

  const { hasMine, hasBeenSweeped, flaggedForMine } = tile;
  const surroundingMineCount = getSurroundingMineCount(tile, tiles);

  const onclick = gameOver
    ? null
    : onClick(tile, tiles, userIsFlaggingMines, surroundingMineCount);

  const cursorClass = userIsFlaggingMines
    ? 'tile--preventing-mine'
    : 'tile--targeting-mine';

  switch (true) {
    case hasMine && hasBeenSweeped: {
      return <div className={`tile tile--has-mine ${cursorClass}`}>!</div>;
    }

    case hasBeenSweeped: {
      return (
        <div className={`tile tile--sweeped ${cursorClass}`}>
          {surroundingMineCount}
        </div>
      );
    }

    case flaggedForMine: {
      return (
        <div
          onclick={onclick}
          className={`tile tile--should-have-mine ${cursorClass}`}
        >
          ?
        </div>
      );
    }

    default: {
      return (
        <div
          oncontextmenu={() => false}
          onclick={onclick}
          className={`tile ${cursorClass}`}
        />
      );
    }
  }
};
