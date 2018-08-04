import { h } from 'hyperapp';

export default ({
  toggleUserIsFlaggingMines,
  setNewTiles,
  setGameOver,
  userIsFlaggingMines,
}) => (
  <div>
    <button onclick={toggleUserIsFlaggingMines}>
      {userIsFlaggingMines ? 'Unflag Mine' : 'Flag Mine'}
    </button>
    <button
      onclick={() => {
        setGameOver();
        setNewTiles();
      }}
    >
      Reset Game
    </button>
  </div>
);
