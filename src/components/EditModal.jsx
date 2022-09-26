import { Button, Form, Modal } from "react-bootstrap";
import ImageImport from "./ImageImport";
import FileBase64 from 'react-file-base64';

const EditModal = ({
  show,
  profileData,
  handleClose,
  handleSubmit,
  handleChangeName,
  handleChangeSurname,
  handleChangeJobTitle,
  handleChangeLocation,
  handleChangeImage,
  name,
  surname,
  jobTitle,
  location,
  image
}) => {
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
          <p className="mt-3">Image Upload</p>
          {/* <ImageImport /> */}
          <FileBase64 multiple={false} type="file" onDone={({base64}) => handleChangeImage(base64)} />
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
