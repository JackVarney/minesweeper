import { h, app } from 'hyperapp';
import state from './state';
import actions from './actions';
import { Grid, Menu } from './components';
import './index.scss';

let _toggleUserIsFlaggingMines;

const keydownCB = event => {
  if (event.keyCode === 32) {
    _toggleUserIsFlaggingMines();
  }
};

window.addEventListener('keydown', keydownCB);

const view = (state, actions) => {
  if (!_toggleUserIsFlaggingMines)
    _toggleUserIsFlaggingMines = actions.toggleUserIsFlaggingMines;

  return (
    <div class="app">
      <Menu {...state} {...actions} />
      <Grid {...state} {...actions} />
      <span class="app__message">
        {state.gameOver
          ? 'Game over! Please reset!'
          : 'TIP: You can press spacebar to flag mines!'}
      </span>
    </div>
  );
};

app(state, actions, view, document.body);
