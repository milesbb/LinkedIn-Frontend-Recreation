import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileInfo";

const comboReducer = combineReducers({
  loadedProfiles: profileReducer,
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;
