import { combineReducers, configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./library";

const rootReducer = combineReducers({
  library: libraryReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
