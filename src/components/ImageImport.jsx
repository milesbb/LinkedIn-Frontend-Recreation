import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

const ImageImport = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  if (selectedImage) {console.log(URL.createObjectURL(selectedImage))}
  return (
    <div>
      {selectedImage && (
        <div className="d-flex mb-4">
          <Image
            alt="Failed to Upload"
            style={{ borderRadius: "100rem", width: "10rem" }}
            src={URL.createObjectURL(selectedImage)}
          />
          <div>
            <Button
              variant="danger"
              className="ml-3 mt-5"
              style={{ style: "0.2rem" }}
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </Button>
          </div>
        </div>
        
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImageImport;
