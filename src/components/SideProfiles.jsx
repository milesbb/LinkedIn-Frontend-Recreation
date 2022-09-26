import { getProfile } from "../redux/actions/getProfileInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import Persone from "./Persone";

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

  console.log(profilesList);

  return (
    <Container className="profiles-container">
      <h2 className="title">Pepole also viewed</h2>
       
          {profilesList &&
            profilesList.map((profile, i) => {
              return (
                <Persone profile={profile} i={i}/>
              );
            })}
  
    </Container>
  );
};

export default SideProfiles;
