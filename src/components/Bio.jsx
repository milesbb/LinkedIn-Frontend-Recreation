import LZString from "lz-string";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../redux/actions/changeProfile";
import { getProfile } from "../redux/actions/getProfileInfo";
import EditButton from "./EditButton";

const Bio = ({ profileData, isOnMyProfile }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

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

  const handleChangeImage = (value) => {
    console.log(value);
    setImage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameForEdit = name ? name : profileData.name;
    const surnameForEdit = surname ? surname : profileData.surname;
    const jobTitleForEdit = jobTitle ? jobTitle : profileData.jobTitle;
    const locationForEdit = location ? location : profileData.area;
    const imageForEdit = image ? image : profileData.image;

    console.log(imageForEdit);

    // const compressed = await Base64String.compress(imageForEdit)
    // console.log("Compressed String" + compressed)

    const editData = {
      name: nameForEdit,
      surname: surnameForEdit,
      title: jobTitleForEdit,
      area: locationForEdit,
      image: imageForEdit,
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
        {isOnMyProfile && (
          <EditButton
            show={show}
            handleShow={handleShow}
            profileData={profileData}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handleChangeName={handleChangeName}
            handleChangeSurname={handleChangeSurname}
            handleChangeJobTitle={handleChangeJobTitle}
            handleChangeLocation={handleChangeLocation}
            handleChangeImage={handleChangeImage}
            name={name}
            surname={surname}
            jobTitle={jobTitle}
            location={location}
            image={image}
          />
        )}
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
