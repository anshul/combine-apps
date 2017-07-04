import types from '../../action_types';

const initialState = {
  Users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      const Users = [
        ...state.Users,
        {
          Name: action.payload.data.playerName,
          Age: action.payload.data.playerAge,
          City: action.payload.data.playerCity,
        },
      ];
      console.log('here action', Users);
      return Object.assign({}, state, { Users });
    }

    default:
      return state;
  }
}
