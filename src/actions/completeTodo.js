import types from '../action_types';

export default id => dispatch => dispatch({ type: types.COMPLETE_TODO, payload: { id } });
