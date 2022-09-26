import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileChangeReducer from "../reducers/profileChangeReducer";
import profileReducer from "../reducers/profileInfo";

const comboReducer = combineReducers({
  loadedProfiles: profileReducer,
  editProfile: profileChangeReducer
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;
