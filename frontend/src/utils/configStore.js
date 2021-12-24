import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const resetEnhancer = (rootReducer) => (state, action) => {
  if (action.type !== "RESET") return rootReducer(state, action);

  const newState = rootReducer(undefined, {});
  newState.router = state.router;
  return newState;
};
const middlewares = [routerMiddleware(history), sagaMiddleware];
const store = createStore(
  resetEnhancer(createRootReducer(history)),
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}
