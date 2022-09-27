export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const GET_PROFILE_INFO_ERROR = "GET_PROFILE_INFO_ERROR";
export const GET_PROFILE_INFO_LOADING = "GET_PROFILE_INFO_LOADING";
export const GET_PROFILES_LIST = "GET_PROFILES_LIST";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const ON_MY_PROFILE = "ON_MY_PROFILE"

// if userId =
// "" then returns list of profiles to 'profilesList'
// "me" then returns our profile to 'currentUser'
// a user ID as string then returns profile of specific user Id to 'profile'

export const getProfile = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PROFILE_INFO_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userId,
        {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8'
            }
        }
      );

      if (response.ok) {
        let profile = await response.json();
        if (userId === "") {
          dispatch({
            type: GET_PROFILES_LIST,
            payload: profile,
          });
        } else if (userId === "me") {
          dispatch({
            type: GET_CURRENT_USER,
            payload: profile,
          });
        } else {
          dispatch({
            type: GET_PROFILE_INFO,
            payload: profile,
          });
        }
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_PROFILE_INFO_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_PROFILE_INFO_ERROR,
      });
    } finally {
      dispatch({
        type: GET_PROFILE_INFO_LOADING,
        payload: false,
      });
    }
  };
};
