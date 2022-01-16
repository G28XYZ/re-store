import { createStore, compose } from "redux";

import reducer from "./reducers";

const stringEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
      if (typeof action === "string") {
        return originalDispatch({
          type: action,
        });
      }
      return originalDispatch(action);
    };
    return store;
  };

const logEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
      console.log(action.type);
      return originalDispatch(action);
    };
    return store;
  };

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

store.dispatch("HELLO");

export default store;
