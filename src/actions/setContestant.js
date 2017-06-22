import types from '../action_types';

export default data => dispatch =>
  dispatch({
    type: types.SET_CONTESTANT,
    payload: { data },
  });
