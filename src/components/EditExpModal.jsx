import { format } from "date-fns";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getExperiences } from "../redux/actions/getExperiences";
import { handleExperiences } from "../redux/actions/handleExperience";

const EditExpModal = ({ show, handleClose, id, userId, data, purpose }) => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const roleForEdit = role ? role : data.role;
    const companyForEdit = company ? company : data.company;
    const dateForEdit = date ? date : data.startDate;
    const descForEdit = desc ? desc : data.description;
    const areaForEdit = area ? area : data.area;

    const editData = {
      role: roleForEdit,
      company: companyForEdit,
      startDate: dateForEdit,
      endDate: null,
      description: descForEdit,
      area: areaForEdit,
    };

    console.log(editData);

    const methodString = (purpose === "addExp")? "POST":"PUT"

    dispatch(handleExperiences("POST", userId, id, editData));

    dispatch(getExperiences(userId, ""));
    console.log("FORM SUBMITTED");
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{(purpose === "addExp")? "Add Experience": "Edit Experience"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-75">
          <p>Role</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            placeholder={(purpose === "addExp")? "": data.role}
          />
          <p className="mt-3">Company</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            placeholder={(purpose === "addExp")? "": data.company}
          />
          <p className="mt-3">Date</p>
          <Form.Control
            type="date"
            onChange={(e) => {
              setDate(format(new Date(e.target.value), "yyyy") + "-" + format(new Date(e.target.value), "mm") + "-" + format(new Date(e.target.value), "dd") + "T00:00:00.000Z");
            }}
            placeholder={(purpose === "addExp")? "": data.date}
          />
          <p className="mt-3">Description</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder={(purpose === "addExp")? "": data.description}
          />
          <p className="mt-3">Location</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setArea(e.target.value);
            }}
            placeholder={(purpose === "addExp")? "": data.area}
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

export default EditExpModal;
