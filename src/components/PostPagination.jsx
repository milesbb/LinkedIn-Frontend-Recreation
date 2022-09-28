import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT_POST_PAGINATER, getPosts, INCREMENT_POST_PAGINATER } from "../redux/actions/getPosts";

const PostPagination = () => {
  const dispatch = useDispatch();

  const postPagination = useSelector((state) => {
    return state.loadedPosts.postPagination;
  });

  const previousPagination = useSelector((state) => {
    return state.loadedPosts.previousPagination;
  });

  const paginate = (direction) => {
    if (direction === "forward") {
        dispatch({type: INCREMENT_POST_PAGINATER})
    } else if (direction === "back") {
        if (previousPagination !== 0) {
            dispatch({type: DECREMENT_POST_PAGINATER})
        }
    }
    
    dispatch(getPosts(""))
  }
 
  return (
    <div className="d-flex justify-content-between">
      <Button variant="light" style={{ background: "none", border: "none" }} onClick={() => {paginate("back")}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </Button>
      <Button variant="light" style={{ background: "none", border: "none" }} onClick={() => {paginate("forward")}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default PostPagination;
