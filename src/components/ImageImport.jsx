import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ImageImport = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = () => {

  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter File Name"
            name="File Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.File
            required
            name="file"
            label="File"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
        </Form.Group>
        
      </Form>
    </div>
  );
};

export default ImageImport;
