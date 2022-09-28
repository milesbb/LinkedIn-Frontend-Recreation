import { useState } from "react";
import Person from "./Person";
import { getProfile } from "../redux/actions/getProfileInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Warning from "./Warning";

const SearchReseult = ({ query }) => {
  const dispatch = useDispatch();

  const profilesList = useSelector((state) => {
    return state.loadedProfiles.uncutProfilesList;
  });

  useEffect(() => {
    if (profilesList.length === 0) {
      dispatch(getProfile(""));
    }
  }, []);
  let result = profilesList.filter((profile) =>
    profile.name.toLowerCase().includes(query.toLowerCase())
    
  );
  console.log(result)
  return (
    <div
      className="p-2 mt-5"
      style={{
        background: "white",
        borderRadius: "10px",
        width: "300px",
        position: "absolute",
        zIndex: "2",
        height: "400px",
        overflow: "hidden"
      }}
      
    >
     {result.length === 0 ? <Warning variant="info" message="No Results"/>
    
      : result.map((profile, i) => {
        return <Person profile={profile} key={profile._id}/>})}
    </div>
  );
};

export default SearchReseult;
