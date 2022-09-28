import { Button, Form, Image, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const WritePostModal = ({ show, handleClose }) => {
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  const handleSubmit = () => {};
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-100">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <div className="d-flex">
                <Image
                  src={currentUser.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                />
                <div className="ml-2 mt-1" style={{lineHeight: "0.3rem"}}>
                    <p className="font-weight-bold">{currentUser.name + " " + currentUser.surname}</p>
                    <Button variant="light" style={{borderRadius: "50px", border: "1px solid gray", fontSize: "0.7rem"}}>Anyone</Button>
                </div>
              </div>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What do you want to talk about?"
              rows={5}
              style={{ border: "none" }}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" style={{borderRadius: "50px"}} onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" style={{borderRadius: "50px"}} onClick={handleSubmit}>
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WritePostModal;
