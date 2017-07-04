import types from '../../action_types';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text,
        },
        ...state,
      ];

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case types.COMPLETE_TODO:
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));

    default:
      return state;
  }
}
