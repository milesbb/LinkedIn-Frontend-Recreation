export const HANDLE_POST_SUCCESS = "HANDLE_POST_SUCCESS";
export const HANDLE_POST_LOADING = "HANDLE_POST_LOADING";
export const HANDLE_POST_ERROR = "HANDLE_POST_ERROR";

// DELETE - type mandatory
// POST, PUT - type, postId, data mandatory

export const handlePosts = (type, postId, data, imgData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: HANDLE_POST_LOADING,
        payload: true,
      });

      dispatch({
        type: HANDLE_POST_ERROR,
        payload: false,
      });

      dispatch({
        type: HANDLE_POST_SUCCESS,
        payload: false,
      });

      let fetchURL = "https://striveschool-api.herokuapp.com/api/posts/";

      if (type !== "POST") {
        fetchURL = fetchURL + postId;
      }

      const postPutConfig = {
        method: type,
        body: JSON.stringify(data),
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
          "Content-Type": "application/json",
        }),
      };

      const deleteConfig = {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
        },
      };

      const chosenConfig = type === "DELETE" ? deleteConfig : postPutConfig;

      let response = await fetch(fetchURL, chosenConfig);

      if (response.ok) {
        if (imgData !== null) {
          let imgResponse = await fetch(
            "https://striveschool-api.herokuapp.com/api/posts/" + postId,
            {
              method: "POST",
              body: imgData,
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxNjQzOTc2NTM5YzAwMTViNWNkNjkiLCJpYXQiOjE2NjQxODEzMDUsImV4cCI6MTY2NTM5MDkwNX0.KhUolJNoXb0Qw4Ddn9_bNvXY60qoqEiyqDK01VX9OE8",
              },
            }
          );
        }
        dispatch({
          type: HANDLE_POST_SUCCESS,
          payload: true,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: HANDLE_POST_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: HANDLE_POST_ERROR,
        payload: true,
      });
    } finally {
      dispatch({
        type: HANDLE_POST_LOADING,
        payload: false,
      });
      const errorTimeout = setTimeout(() => {
        dispatch({
          type: HANDLE_POST_ERROR,
          payload: false,
        });
        dispatch({
          type: HANDLE_POST_SUCCESS,
          payload: false,
        });
      }, 3000);
    }
  };
};
