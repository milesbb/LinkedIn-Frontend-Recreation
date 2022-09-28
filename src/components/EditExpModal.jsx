import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../redux/actions/getExperiences";
import { handleExperiences } from "../redux/actions/handleExperience";
import Loading from "./Loading";
import Warning from "./Warning";

const EditExpModal = ({ show, handleClose, id, userId, data, purpose }) => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [area, setArea] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleExpLoading = useSelector((state) => {
    return state.handleExperiences.handleExpLoading;
  });

  const handleExpError = useSelector((state) => {
    return state.handleExperiences.handleExpError;
  });

  const handleExpSuccess = useSelector((state) => {
    return state.handleExperiences.handleExpSuccess;
  });

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
    console.log(selectedFile);

    const expImgFormData = new FormData();
    if (selectedFile !== null) {
      expImgFormData.append("experience", selectedFile);
    }
    console.log(expImgFormData);
    const finalImgData = (selectedFile !== null)? expImgFormData : null

    const methodString = purpose === "addExp" ? "POST" : "PUT";

    dispatch(handleExperiences(methodString, userId, id, editData, finalImgData));

    dispatch(getExperiences(userId, ""));
    console.log("FORM SUBMITTED");
  };

  useEffect(() => {
    if (handleExpLoading) {
      dispatch(getExperiences(userId, ""));
    }
  }, [handleExpLoading]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {purpose === "addExp" ? "Add Experience" : "Edit Experience"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-75">
          <p>Role</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            placeholder={purpose === "addExp" ? "" : data.role}
          />
          <p className="mt-3">Company</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            placeholder={purpose === "addExp" ? "" : data.company}
          />
          <p className="mt-3">Date</p>
          <Form.Control
            type="date"
            onChange={(e) => {
              setDate(
                format(new Date(e.target.value), "yyyy") +
                  "-" +
                  format(new Date(e.target.value), "MM") +
                  "-" +
                  format(new Date(e.target.value), "dd")
              );
            }}
            placeholder={purpose === "addExp" ? "" : data.date}
          />
          <p className="mt-3">Description</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder={purpose === "addExp" ? "" : data.description}
          />
          <p className="mt-3">Location</p>
          <Form.Control
            type="search"
            onChange={(e) => {
              setArea(e.target.value);
            }}
            placeholder={purpose === "addExp" ? "" : data.area}
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
          <div className="my-2">
            {handleExpLoading && <Loading />}
            {!handleExpLoading && handleExpError && (
              <Warning
                variant="danger"
                message={
                  purpose === "addExp"
                    ? "Error with adding experience"
                    : "Error with editing experience"
                }
              />
            )}
            {!handleExpLoading && !handleExpError && handleExpSuccess && (
              <Warning
                variant="success"
                message={
                  purpose === "addExp"
                    ? "Experience added!"
                    : "Experience edited!"
                }
              />
            )}
          </div>
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
