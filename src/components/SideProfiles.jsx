import { getProfile } from "../redux/actions/getProfileInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";

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
        <ListGroup variant="flush">
          {profilesList &&
            profilesList.map((profile, i) => {
              return (
                <ListGroup.Item key={i}>
                  <div className="d-flex jobTitle">
                    <img
                      height={60}
                      style={{ borderRadius: "50%" }}
                      width={60}
                      src={profile.image ? profile.image : "https://via.placeholder.com"}
                      alt=""
                    />
                    <p className="ml-1">
                      <strong>
                        {profile.name} {profile.surname}
                      </strong>{" "}
                      ·{i + 1} {profile.username} <br />
                      {profile.title}
                    </p>
                  </div>

                  <Button
                    variant="outline-secondary"
                    style={{ borderRadius: "5rem" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-person-plus-fill mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fillRule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>{" "}
                    <span style={{fontWeight: "700"}}> Connect </span>
                  </Button>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
  
    </Container>
  );
};

export default SideProfiles;
