import {
  DECREMENT_POST_PAGINATER,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_SPECIFIC_POST,
  INCREMENT_POST_PAGINATER,
} from "../actions/getPosts";

const initialState = {
  posts: [],
  specificPost: null,
  postsLoading: false,
  postsError: false,
  postPagination: 10,
  previousPagination: 0,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.slice(state.previousPagination, state.postPagination),
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
    case INCREMENT_POST_PAGINATER:
      return {
        ...state,
        previousPagination: state.postPagination,
        postPagination: state.postPagination + 10,
      };
    case DECREMENT_POST_PAGINATER:
      return {
        ...state,
        postPagination: state.previousPagination,
        previousPagination: state.previousPagination - 10,
      };
    default:
      return state;
  }
};

export default postsReducer;
