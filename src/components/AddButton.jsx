import { useState } from "react";
import { Button } from "react-bootstrap";
import EditExpModal from "./EditExpModal";

const AddButton = ({ userId }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        style={{ background: "none", color: "black", border: "none" }}
        onClick={handleShow}
        className="mr-4 my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </Button>

      <EditExpModal purpose="addExp" show={show} handleClose={handleClose} userId={userId} />
    </div>
  );
};

export default AddButton;
