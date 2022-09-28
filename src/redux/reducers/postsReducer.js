import {
  DECREMENT_POST_PAGINATER,
  GET_MY_POSTS,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_SPECIFIC_POST,
  INCREMENT_POST_PAGINATER,
} from "../actions/getPosts";
import { SET_ID_FOR_POSTS } from "../actions/getProfileInfo";

const initialState = {
  posts: [],
  myPosts: [],
  specificPost: null,
  postsLoading: false,
  postsError: false,
  postPagination: 10,
  previousPagination: 0,
//   userId: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload[0].slice(
          state.previousPagination,
          state.postPagination
        ),
        myPosts: action.payload[1]
      };
    case GET_SPECIFIC_POST:
      return {
        ...state,
        specificPost: action.payload,
      };
    // case SET_ID_FOR_POSTS:
    //   return {
    //     ...state,
    //     userId: action.payload,
    //   };
    // case GET_MY_POSTS:
    //   return {
    //     ...state,
    //     myPosts: ((action.payload.length !== 0) ? action.payload.filter((post) => {
    //       return post.user._id === state.userId;
    //     }) : []),
    //   };

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
