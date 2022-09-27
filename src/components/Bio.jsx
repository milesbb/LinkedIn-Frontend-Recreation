import LZString from "lz-string";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../redux/actions/changeProfile";
import { getProfile } from "../redux/actions/getProfileInfo";
import EditButton from "./EditButton";

const Bio = ({ profileData, isOnMyProfile }) => {
    console.log("current user", profileData);
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
          left: "3vw",
          top: "6vh",
          background: "white",
          borderRadius: "150rem",
          border: "solid 8px white",
        }}
        src={profileData.image}
      />
      <div
        style={{
          background: "gray",
          overflow: "hidden",
          height: "25vh",
          borderRadius: "10px 10px 0 0",
        }}
        className="w-100 mb-5"
      ></div>
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
