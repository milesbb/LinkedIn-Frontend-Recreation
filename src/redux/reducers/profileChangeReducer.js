import {
  CHANGE_PROFILE_ERROR,
  CHANGE_PROFILE_LOADING,
  CHANGE_PROFILE_SUCCESS,
} from "../actions/changeProfile";

const initialState = {
  profileChangeSuccess: false,
  profileChangeError: false,
  profileChangeLoading: false,
};

const profileChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_SUCCESS:
      return {
        ...state,
        profileChangeSuccess: action.payload,
      };
    case CHANGE_PROFILE_ERROR:
      return {
        ...state,
        profileChangeError: action.payload,
      };
    case CHANGE_PROFILE_LOADING:
      return {
        ...state,
        profileChangeLoading: action.payload,
      };

    default:
      return state;
  }
};

export default profileChangeReducer;
