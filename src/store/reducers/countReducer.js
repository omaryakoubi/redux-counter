import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/types";

const initalState = { count: 0 };

const countReducer = (state = initalState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: (state.count += 1),
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count > 0 ? (state.count -= 1) : (state.count = 0),
      };

    default:
      return state;
  }
};

export default countReducer;
