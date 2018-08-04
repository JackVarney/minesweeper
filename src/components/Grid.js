import { h } from 'hyperapp';
import './Grid.scss';
import { Tile } from '.';

export default ({
  userIsFlaggingMines,
  tiles,
  updateTile,
  gameOver,
  setGameOver,
}) => (
  <div class="grid">
    {tiles.map(tileRow => (
      <div class="grid__row">
        {tileRow.map(tile => (
          <Tile
            tile={tile}
            tiles={tiles}
            updateTile={updateTile}
            userIsFlaggingMines={userIsFlaggingMines}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />
        ))}
      </div>
    ))}
  </div>
);
