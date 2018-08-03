import { h } from 'hyperapp';
import './Tile.scss';

const onClick = ({ tile, updateTile }) => () => {
  tile.hasBeenSweeped = true;
  updateTile(tile);
};

export default ({ tile, updateTile }) => (
  <div
    onclick={onClick({ tile, updateTile })}
    class={!tile.hasBeenSweeped ? 'tile' : 'tile tile--sweeped'}
  />
);
