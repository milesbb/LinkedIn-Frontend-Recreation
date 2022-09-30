import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExperiences } from "../redux/actions/getExperiences";
import AddButton from "./AddButton";
import ExperienceItem from "./ExperienceItem";
import Loading from "./Loading";
import Warning from "./Warning";

const ExperiencesSection = ({ userId }) => {
  const params = useParams();
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
  const experiences = useSelector((state) => {
    return state.loadedExperiences.experiences;
  });
  const experiencesLoading = useSelector((state) => {
    return state.loadedExperiences.experiencesLoading;
  });
  const experiencesError = useSelector((state) => {
    return state.loadedExperiences.experiencesError;
  });
  const loading = useSelector((state) => {
    return state.loadedProfiles.loadingProfile;
  });

  const getExpData = (userId) => {
    dispatch(getExperiences(userId, ""));
  };

//   useEffect(() => {
//     getExpData(userId);
//   }, []);

  useEffect(() => {
    getExpData(userId);
  }, [userId]);

  console.log("EXPERIENCES:", experiences);

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          background: "white",
        }}
        className="mt-5 text-left position-relative p-1"
      >
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="ml-3 my-2">Experiences</h2>
          </div>
          <div className="mt-1">
            {isOnMyProfile && <AddButton userId={userId} />}
          </div>
        </div>
        <ListGroup>
            {experiencesLoading && <Loading />}
            {!experiencesLoading && experiencesError && <Warning variant="danger" message="error loading experiences" />}
            {!experiencesLoading && !experiencesError && experiences.length === 0 && <Warning variant="info" message={isOnMyProfile ? "No Experiences, add some using the + button!" : "This user has not uploaded any experiences"}/>}
          {!experiencesLoading && !experiencesError && !(experiences.length === 0) && experiences.map((exp) => {
            return <ExperienceItem key={exp._id} itemKey={exp._id} exp={exp} userId={userId} />;
          })}
        </ListGroup>
      </div>
      
    </>
  );
};

export default ExperiencesSection;
