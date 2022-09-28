import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_LOADING, GET_SPECIFIC_POST } from "../actions/getPosts";

const initialState = {
  posts: [],
  specificPost: null,
  postsLoading: false,
  postsError: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_SPECIFIC_POST:
      return {
        ...state,
        specificPost: action.payload,
      };
    case GET_POSTS_LOADING:
      return {
        ...state,
        postsLoading: action.payload,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        postsError: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
