import types from '../action_types';

export default () => dispatch =>
  dispatch({
    type: types.CLEAR_BOARD,
  });
