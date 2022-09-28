import { HANDLE_POST_ERROR, HANDLE_POST_LOADING, HANDLE_POST_SUCCESS } from "../actions/handlePosts";

const initialState = {
  handlePostSuccess: false,
  handlePostError: false,
  handlePostLoading: false,
};

const postHandleReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_POST_SUCCESS:
      return {
        ...state,
        handlePostSuccess: action.payload,
      };
    case HANDLE_POST_ERROR:
      return {
        ...state,
        handlePostError: action.payload,
      };
    case HANDLE_POST_LOADING:
      return {
        ...state,
        handlePostLoading: action.payload,
      };
    default:
      return state;
  }
};

export default postHandleReducer;
