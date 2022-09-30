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
      <div className="mx-aut my-2 w-100 d-flex justify-content-between">
        <Button variant="light" style={{ color: "gray" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-card-image mr-3"
            style={{ color: "#378fe9" }}
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
          </svg>
          Photo
        </Button>
        <Button variant="light" style={{ color: "gray" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            style={{ color: "#5f9c41" }}
            className="bi bi-play-btn-fill mr-3"
            viewBox="0 0 16 16"
          >
            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
          Video
        </Button>
        <Button variant="light" style={{ color: "gray" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            style={{ color: "#c37d17" }}
            className="bi bi-calendar-date mr-3"
            viewBox="0 0 16 16"
          >
            <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          Event
        </Button>
        <Button variant="light" style={{ color: "gray" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            style={{ color: "#e16745" }}
            className="bi bi-justify-left mr-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          Write article
        </Button>
      </div>
    </div>
  );
};

export default AddPostSection;
