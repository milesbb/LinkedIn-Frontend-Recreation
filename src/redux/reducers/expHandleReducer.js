import {
  HANDLE_EXPERIENCE_ERROR,
  HANDLE_EXPERIENCE_LOADING,
  HANDLE_EXPERIENCE_SUCCESS,
} from "../actions/handleExperience";

const initialState = {
  handleExpSuccess: false,
  handleExpError: false,
  handleExpLoading: false,
};

const experienceHandleReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        handleExpSuccess: action.payload,
      };
    case HANDLE_EXPERIENCE_ERROR:
      return {
        ...state,
        handleExpError: action.payload,
      };
    case HANDLE_EXPERIENCE_LOADING:
      return {
        ...state,
        handleExpLoading: action.payload,
      };
      default:
      return state;
  }
};

export default experienceHandleReducer;
