import {
  GET_CURRENT_USER,
  GET_PROFILES_LIST,
  GET_PROFILE_INFO,
  GET_PROFILE_INFO_ERROR,
  GET_PROFILE_INFO_LOADING,
  GET_UNCUT_PROFILES_LIST,
  ON_MY_PROFILE,
} from "../actions/getProfileInfo";

const initialState = {
  currentUser: null,
  isOnMyProfile: true,
  profile: null,
  profilesList: [],
  uncutProfilesList: [],
  errorProfile: false,
  loadingProfile: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_MY_PROFILE:
      return {
        ...state,
        isOnMyProfile: action.payload
      }
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        
      };
    case GET_UNCUT_PROFILES_LIST:
      return {
        ...state,
        uncutProfilesList: action.payload
      }
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
