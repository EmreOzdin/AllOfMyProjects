import { LOADING_FALSE, LOADING_TRUE } from "../types/appTypes";

export const setLoadingFalseAction = () => ({
  type: LOADING_FALSE,
});

export const setLoadingTrueAction = () => ({
  type: LOADING_TRUE,
});
