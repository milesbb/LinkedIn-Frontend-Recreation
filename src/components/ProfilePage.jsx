import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../redux/actions/getProfileInfo";
import Bio from "./Bio";
import Loading from "./Loading";
import SideProfiles from "./SideProfiles";
import Warning from "./Warning";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  const profile = useSelector((state) => {
    return state.loadedProfiles.profile;
  });
  const isOnMyProfile = useSelector((state) => {
    return state.loadedProfiles.isOnMyProfile;
  });
  const loading = useSelector((state) => {
    return state.loadedProfiles.loadingProfile;
  });
  const errorOccurred = useSelector((state) => {
    return state.loadedProfiles.errorProfile;
  });

  const params = useParams();

  console.log(params.userId);

  //   test /profiles/5fc4ae95b708c200175de88d

  useEffect(() => {
    if (params.userId === undefined) {
      dispatch(getProfile("me"));
      console.log(currentUser);
    } else {
      dispatch(getProfile(params.userId));
      console.log(profile);
    }
  }, [params.userId]);

  return (
    <div>
      {loading && <Loading />}

      {!loading && (errorOccurred || currentUser === null) && (
        <Warning
          variant="danger"
          message="There was an error loading this content"
        />
      )}

      {!loading && !(errorOccurred || currentUser === null) && (
        <Container>
          <Row>
            <Col sm={12} md={8} lg={9}>
              <Bio
                isOnMyProfile={isOnMyProfile}
                profileData={isOnMyProfile ? currentUser : profile}
              />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <SideProfiles />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProfilePage;
