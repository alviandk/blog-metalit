import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";

const createRootReducer = (history) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default createRootReducer;