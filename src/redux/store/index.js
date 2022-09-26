import { configureStore, combineReducers } from "@reduxjs/toolkit";


const comboReducer = combineReducers({
//   ADD REDUCERS HERE
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;