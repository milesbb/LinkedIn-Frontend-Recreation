import { configureStore, combineReducers } from "@reduxjs/toolkit";
import experiencesReducer from "../reducers/experiencesReducer";
import experienceHandleReducer from "../reducers/expHandleReducer";
import profileChangeReducer from "../reducers/profileChangeReducer";
import profileReducer from "../reducers/profileInfo";

const comboReducer = combineReducers({
  loadedProfiles: profileReducer,
  editProfile: profileChangeReducer,
  loadedExperiences: experiencesReducer,
  handleExperiences: experienceHandleReducer
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;
