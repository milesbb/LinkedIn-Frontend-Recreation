import { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../redux/actions/changeProfile";
import { getProfile } from "../redux/actions/getProfileInfo";
import Loading from "./Loading";
import Warning from "./Warning";

const Bio = ({ profileData, isOnMyProfile }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const editErrorOccurred = useSelector((state) => {
    return state.editProfile.profileChangeError;
  });
  const editLoading = useSelector((state) => {
    return state.editProfile.profileChangeLoading;
  });
  const wasEditSuccessful = useSelector((state) => {
    return state.editProfile.profileChangeSuccess;
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameForEdit = name ? name : profileData.name;
    const surnameForEdit = surname ? surname : profileData.surname;
    const jobTitleForEdit = jobTitle ? jobTitle : profileData.jobTitle;
    const locationForEdit = location ? location : profileData.area;

    const editData = {
      name: nameForEdit,
      surname: surnameForEdit,
      title: jobTitleForEdit,
      area: locationForEdit,
    };
    dispatch(changeProfile(editData));

    dispatch(getProfile("me"));
    console.log("FORM SUBMITTED");
  };
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
        
      }}
      className="mt-5 text-left position-relative"
    >
      <Image
        className="position-absolute"
        style={{
          width: "12rem",
          left: "3vw",
          top: "6vh",
          background: "white",
          borderRadius: "150rem",
          border: "solid 8px white",
        }}
        src={profileData.image}
      />
      <div
        style={{
          background: "gray",
          overflow: "hidden",
          height: "25vh",
          borderRadius: "10px 10px 0 0",
        }}
        className="w-100 mb-5"
      ></div>
      <div className="mt-5 ml-5 d-flex w-75">
        <div className="mr-auto">
          <h1>{profileData.name + " " + profileData.surname}</h1>
          <h3>{profileData.title}</h3>
          <p>{profileData.area}</p>
        </div>
        {isOnMyProfile && <div>
          <Button
            style={{ background: "none", color: "black", border: "none" }}
            onClick={handleShow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="w-75">
                <p>Name</p>
                <Form.Control
                  type="search"
                  value={name}
                  onChange={handleChangeName}
                  placeholder={profileData.name}
                />
                <p className="mt-3">Surname</p>
                <Form.Control
                  type="search"
                  value={surname}
                  onChange={handleChangeSurname}
                  placeholder={profileData.surname}
                />
                <p className="mt-3">Job Title</p>
                <Form.Control
                  type="search"
                  value={jobTitle}
                  onChange={handleChangeJobTitle}
                  placeholder={profileData.title}
                />
                <p className="mt-3">Location</p>
                <Form.Control
                  type="search"
                  value={location}
                  onChange={handleChangeLocation}
                  placeholder={profileData.area}
                />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>}
      </div>
      {/* {editLoading && <Loading className="fixed-bottom" />}
          {!editLoading && editErrorOccurred && (
            <Warning
              variant="danger"
              message="There was an error with the edit, try again later."
              className="fixed-bottom"
            />
          )}
          {!editLoading && !editErrorOccurred && wasEditSuccessful && (
            <Warning variant="success" message="Edit succesful!" style={{position: "absolute", top: "0"}}/>
          )} */}
    </div>
  );
};

export default Bio;
