import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeProfile } from "../redux/actions/changeProfile";
import { getProfile } from "../redux/actions/getProfileInfo";
import { useParams } from "react-router-dom";

const EditModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loader, setLoader] = useState(false);

  const profileData = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  const profile = useSelector((state) => {
    return state.loadedProfiles.profile;
  });

  const editErrorOccurred = useSelector((state) => {
    return state.editProfile.profileChangeError;
  });
  const editLoading = useSelector((state) => {
    return state.editProfile.profileChangeLoading;
  });
  const wasEditSuccessful = useSelector((state) => {
    return state.editProfile.profileChangeSuccess;
  });

  const params = useParams();

  const getData = async () => {
    await dispatch(getProfile("me"));
    console.log("current userMODAL", profileData);
    if (params.userId !== undefined) {
      await dispatch(getProfile(params.userId));
      console.log(profile);
    }
  };

  // useEffect(() => {
  //   if (editLoading) {
  //     getData();
  //   }
  // }, [editLoading]);

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

    console.log(editData);
    console.log(selectedFile)

    const profileImgFormData = new FormData();
    if (selectedFile !== null) {
      profileImgFormData.append("profile", selectedFile);
    }
    console.log(profileImgFormData)
    await dispatch(
      changeProfile(
        editData,
        (selectedFile !== null ? profileImgFormData : null),
        profileData._id
      )
    );

    dispatch(getProfile("me"));
    console.log("FORM SUBMITTED");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-75">
          <p>Name</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={profileData.name}
          />
          <p className="mt-3">Surname</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            placeholder={profileData.surname}
          />
          <p className="mt-3">Job Title</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            placeholder={profileData.title}
          />
          <p className="mt-3">Location</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder={profileData.area}
          />
          <p className="mt-3">Image Upload</p>
          <Form.File
            required
            name="file"
            label="File"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
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
  );
};

export default EditModal;
