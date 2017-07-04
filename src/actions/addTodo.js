import types from '../action_types';

export default text => dispatch => dispatch({ type: types.ADD_TODO, payload: { text } });
