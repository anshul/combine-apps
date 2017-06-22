import types from '../action_types';
// import axios from 'axios';

export default data => dispatch => {
  dispatch({ type: types.ADD_USER, payload: { data } });
};
