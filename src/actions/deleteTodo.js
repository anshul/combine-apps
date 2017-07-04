import types from '../action_types';

export default id => dispatch => dispatch({ type: types.DELETE_TODO, payload: { id } });
