import { h } from 'hyperapp';
import './Grid.scss';
import { Tile } from '.';

export default ({ tiles, updateTile }) => (
  <div class="grid">
    {tiles.map(tileRow => (
      <div class="grid__row">
        {tileRow.map(tile => <Tile tile={tile} updateTile={updateTile} />)}
      </div>
    ))}
  </div>
);
