export const CHANGE_PROFILE_SUCCESS = "CHANGE_PROFILE"
export const CHANGE_PROFILE_LOADING = "CHANGE_PROFILE_LOADING"
export const CHANGE_PROFILE_ERROR = "CHANGE_PROFILE_ERROR"

export const changeProfile = (data) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: CHANGE_PROFILE_LOADING,
          payload: true,
        });

        let config = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8'
            })
        }
  
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/", config
        );
  
        if (response.ok) {
            dispatch({
              type: CHANGE_PROFILE_SUCCESS,
              payload: true,
            });
        } else {
          console.log("error with initial fetch");
          dispatch({
            type: CHANGE_PROFILE_ERROR,
          });
        }
      } catch (error) {
        console.log("try catch error:", error);
        dispatch({
          type: CHANGE_PROFILE_ERROR,
        });
      } finally {
        dispatch({
          type: CHANGE_PROFILE_LOADING,
          payload: false,
        });
      }
    };
  };
  