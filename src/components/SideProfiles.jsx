import { getProfile } from "../redux/actions/getProfileInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import Person from "./Person";

const SideProfiles = () => {
  const dispatch = useDispatch();
  const profilesList = useSelector((state) => {
    return state.loadedProfiles.profilesList;
  });

  useEffect(() => {
    if (profilesList.length === 0) {
      dispatch(getProfile(""));
    }
  }, []);

  return (
    <div className="p-2 mt-5" style={{background: "white", borderRadius: "10px"}}>
      <h2 className="text-left ml-2" style={{fontSize: "1.3rem"}}>People also viewed</h2>
  

          {profilesList &&
            profilesList.map((profile, i) => {
              return (
                <Person profile={profile} key={i}/>
              );
            })}
 
  
    </div>
  );
};

export default SideProfiles;
