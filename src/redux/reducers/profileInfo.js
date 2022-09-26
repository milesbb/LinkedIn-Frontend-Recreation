import {
  GET_CURRENT_USER,
  GET_PROFILES_LIST,
  GET_PROFILE_INFO,
  GET_PROFILE_INFO_ERROR,
  GET_PROFILE_INFO_LOADING,
} from "../actions/getProfileInfo";

const initialState = {
  currentUser: null,
  profile: null,
  profilesList: [],
  errorProfile: false,
  loadingProfile: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_PROFILE_INFO:
      return {
        ...state,
        profile: action.payload,
      };

    case GET_PROFILES_LIST:
      return {
        ...state,
        profilesList: action.payload,
      };

    case GET_PROFILE_INFO_ERROR:
      return {
        ...state,
        errorProfile: true,
      };

    case GET_PROFILE_INFO_LOADING:
      return {
        ...state,
        loadingProfile: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
