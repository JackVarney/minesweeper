import { range } from 'lodash';

const { random } = Math;
const gridSize = 10;

export default () =>
  range(gridSize).map(x =>
    range(gridSize).map(y => ({
      point: {
        x,
        y,
      },
      hasMine: random() > 0.75,
      hasBeenSweeped: false,
    }))
  );
