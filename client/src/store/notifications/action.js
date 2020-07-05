import { v4 as uuidv4 } from "uuid";
import actionType from "./actionTypes.js";

export const showSuccess = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_SUCCESS,
    payload: { message, id: uuidv4() },
  });
};
export const showError = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_ERROR,
    payload: { message, id: uuidv4() },
  });
};

export const showWarning = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_WARNING,
    payload: { message, id: uuidv4() },
  });
};

export const showInfo = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_INFO,
    payload: { message, id: uuidv4() },
  });
};
