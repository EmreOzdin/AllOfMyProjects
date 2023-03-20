import { LOADING_TRUE, LOADING_FALSE } from "../types/appTypes";

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_TRUE:
      return { ...state, loading: true };
    case LOADING_FALSE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default appReducer;
