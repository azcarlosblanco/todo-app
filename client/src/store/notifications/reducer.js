import initialState from "./initialState.js";
import actionType from "./actionTypes.js";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_INFO:
      return {
        message: action.payload.message,
        level: "info",
        id: action.payload.id,
      };
    case actionType.SHOW_ERROR:
      return {
        message: action.payload.message,
        level: "error",
        id: action.payload.id,
      };
    case actionType.SHOW_SUCCESS:
      return {
        message: action.payload.message,
        level: "success",
        id: action.payload.id,
      };
    case actionType.SHOW_WARNING:
      return {
        message: action.payload.message,
        level: "warning",
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default notificationReducer;
