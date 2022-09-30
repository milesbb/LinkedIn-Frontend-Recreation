import { Button, Image } from "react-bootstrap";
import EditButton from "./EditButton";

const Bio = ({ profileData, isOnMyProfile }) => {
  console.log("current user", profileData);
  const backgroundPicObj = {
    background: "gray",
    backgroundImage: "url(" + profileData.image + ")",
    overflow: "hidden",
    height: "25vh",
    borderRadius: "10px 10px 0 0",
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
          height: "12rem",
          left: "3vw",
          top: "6vh",
          background: "white",
          borderRadius: "150rem",
          border: "solid 8px white",
        }}
        src={profileData.image}
      />
      <div style={backgroundPicObj} className="w-100 mb-5"></div>
      <div className="mt-5 ml-5 d-flex w-75">
        <div className="mr-auto">
          <h1>{profileData.name + " " + profileData.surname}</h1>
          <h3 style={{ fontSize: "1.3rem" }}>{profileData.title}</h3>
          <p>
            {profileData.area}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            <a href="" className="font-weight-bold">Contact Info</a>
          </p>
          <p><a href="" className="font-weight-bold">{Math.floor(Math.random() * 100).toString() + " Connections"}</a></p>
          <div className="text-lg-left text-center">
            <Button variant="primary" className="font-weight-bold mb-4 mr-2" style={{borderRadius: "10rem"}}>{isOnMyProfile? "Open to" : "Connect"}</Button>
            <Button variant="light" className="font-weight-bold mb-4 mr-2" style={{borderRadius: "10rem", border: "solid 1px #0b66c2", color: "#0b66c2"}}>{isOnMyProfile? "Add Profile Section" : "Message"}</Button>
            <Button variant="light" className="font-weight-bold mb-4" style={{borderRadius: "10rem", border: "solid 1px gray" , color: "gray"}}>More</Button>
          </div>
        </div>
        {isOnMyProfile && <EditButton purpose="profile" />}
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
