import types from '../../action_types';

const initialState = {
  Users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      console.log('here action', action.payload.data);
      const Users = [
        ...state.Users,
        {
          Name: action.payload.data.playerName,
          Age: action.payload.data.playerAge,
          City: action.payload.data.playerCity,
        },
      ];

      return Object.assign({}, state, { Users });
    }

    default:
      return state;
  }
}
