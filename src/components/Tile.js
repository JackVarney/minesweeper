import { h } from 'hyperapp';
import './Tile.scss';
import { getSurroundingMineCount, cleanUpZeroes } from '../utils';

const onClick = (tile, updateTile, surroundingMineCount) => () => {
  tile.hasBeenSweeped = true;

  if (!tile.hasMine && surroundingMineCount === 0) {
    cleanUpZeroes(tile.point);
  }

  updateTile(tile);
};

export default ({ tile, updateTile }) => {
  const surroundingMineCount = getSurroundingMineCount(tile);
  const { hasMine, hasBeenSweeped, shouldHaveMine } = tile;
  const onclick = onClick(tile, updateTile, surroundingMineCount);

  switch (true) {
    case hasMine && hasBeenSweeped: {
      return (
        <div onclick={onclick} className="tile tile--has-mine">
          !
        </div>
      );
    }

    case hasBeenSweeped: {
      return <div className="tile tile--sweeped">{surroundingMineCount}</div>;
    }

    case !shouldHaveMine: {
      return (
        <div onclick={onclick} className="tile tile--should-have-mine">
          ?
        </div>
      );
    }

    default: {
      return <div onclick={onclick} className="tile" />;
    }
  }
};
