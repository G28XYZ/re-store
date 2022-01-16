import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

import reducer from "./reducers";

// мидлваре модифицирует то как работает функция dispatch
const logMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log(action.type, getState());
    return next(action);
  };

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

// enhancer такие же как мидлваре, мидлваре специальные функции для такого использования
// const stringEnhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       return originalDispatch(action);
//     };
//     return store;
//   };

// const logEnhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       console.log(action.type);
//       return originalDispatch(action);
//     };
//     return store;
//   };

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleWare, stringMiddleware, logMiddleware)
);

// thunkMiddleWare позволяет использовать функции в качестве действий

const delayActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION",
      }),
    timeout
  );
};

store.dispatch(delayActionCreator(3000));

export default store;
