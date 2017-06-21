import types from '../action_types';

export default pos => dispatch =>
  dispatch({
    type: types.MARK_SQUARE,
    pos,
  });
