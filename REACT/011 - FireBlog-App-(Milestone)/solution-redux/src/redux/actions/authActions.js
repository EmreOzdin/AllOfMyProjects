import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types/authTypes";

export const setCurrentUserAction = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
export const clearCurrentUserAction = () => ({
  type: CLEAR_CURRENT_USER,
});
