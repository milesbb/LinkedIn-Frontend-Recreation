import { useState } from "react";
import { Button, FormControl, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import WritePostModal from "./WritePostModal";

const AddPostSection = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });

  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
      }}
      className="mt-5 text-left position-relative p-3"
    >
      <div className="d-flex">
        <Image
          src={currentUser.image}
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "150rem",
          }}
        />
        <Button
          variant="light text-left pl-4 ml-2"
          className="font-weight-bold"
          style={{
            color: "gray",
            border: "1px solid gray",
            width: "87%",
            borderRadius: "50px",
          }}
          onClick={handleShow}
        >
          Start a post
        </Button>
        <WritePostModal show={show} handleClose={handleClose} purpose="add" />
      </div>
    </div>
  );
};

export default AddPostSection;
