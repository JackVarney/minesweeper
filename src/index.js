import { h, app } from 'hyperapp';
import state from './state';
import actions from './actions';
import { Grid } from './components';
import './index.scss';

const view = ({ tiles, gameOver }, actions) => (
  <div class="app">
    <Grid tiles={tiles} updateTile={actions.updateTile} />
  </div>
);

app(state, actions, view, document.body);
