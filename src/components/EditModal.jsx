import { Button, Form, Modal } from "react-bootstrap";
import ImageImport from "./ImageImport";
import FileBase64 from "react-file-base64";
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
  const [image, setImage] = useState("");
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

  useEffect(() => {
    if (editLoading) {
      getData();
    }
  }, [editLoading]);

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

    console.log(editData);

    dispatch(changeProfile(editData));

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
            onChange={(e) => {setName(e.target.value)}}
            placeholder={profileData.name}
          />
          <p className="mt-3">Surname</p>
          <Form.Control
            type="search"
            onChange={(e) => {setSurname(e.target.value)}}
            placeholder={profileData.surname}
          />
          <p className="mt-3">Job Title</p>
          <Form.Control
            type="search"
            onChange={(e) => {setJobTitle(e.target.value)}}
            placeholder={profileData.title}
          />
          <p className="mt-3">Location</p>
          <Form.Control
            type="search"
            onChange={(e) => {setLocation(e.target.value)}}
            placeholder={profileData.area}
          />
          <p className="mt-3">Image Upload</p>
          {/* <ImageImport /> */}
          <FileBase64
            multiple={false}
            type="file"
            onDone={({ base64 }) => handleChangeImage(base64)}
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
