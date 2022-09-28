import { useSelector } from "react-redux";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const GET_POSTS_LOADING = "GET_POSTS_LOADING";
export const GET_SPECIFIC_POST = "GET_SPECIFIC_POST";
export const INCREMENT_POST_PAGINATER = "INCREMENT_POST_PAGINATER"
export const DECREMENT_POST_PAGINATER = "DECREMENT_POST_PAGINATER"

// userId mandatory

// if postId =
// "" then returns list of posts to 'posts'
// an post ID as string then returns object of specific post to 'specificPost'

export const getPosts = (postId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_POSTS_LOADING,
        payload: true,
      });
      dispatch({
        type: GET_POSTS_ERROR,
        payload: false,
      });
      let fetchURL = "https://striveschool-api.herokuapp.com/api/posts/";

      if (postId !== "") {
        fetchURL = fetchURL + postId;
      }
      console.log(fetchURL);
      let response = await fetch(fetchURL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
        },
      });

      if (response.ok) {
        let posts = await response.json();
        let cutPosts = posts.reverse()
        if (postId === "") {
          dispatch({
            type: GET_POSTS,
            payload: cutPosts,
          });
        } else {
          dispatch({
            type: GET_SPECIFIC_POST,
            payload: posts,
          });
        }
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_POSTS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_POSTS_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: GET_POSTS_LOADING,
        payload: false,
      });
    }
  };
};
