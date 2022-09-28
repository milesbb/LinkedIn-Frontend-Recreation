import { Image } from "react-bootstrap";
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
          <h3>{profileData.title}</h3>
          <p>{profileData.area}</p>
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
