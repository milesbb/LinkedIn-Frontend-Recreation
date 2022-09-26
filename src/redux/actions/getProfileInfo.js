export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const GET_PROFILE_INFO_ERROR = "GET_PROFILE_INFO_ERROR";
export const GET_PROFILE_INFO_LOADING = "GET_PROFILE_INFO_LOADING";
export const GET_PROFILES_LIST = "GET_PROFILES_LIST";

// if userId =
// "" then returns list of profiles to 'profilesList'
// "me" then returns our profile to 'profile'
// a user ID as string then returns profile of specific user Id to 'profile'

export const getProfile = (userId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PROFILE_INFO_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userId
      );

      if (response.ok) {
        let profile = await response.json();
        if (userId === "") {
          dispatch({
            type: GET_PROFILES_LIST,
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
