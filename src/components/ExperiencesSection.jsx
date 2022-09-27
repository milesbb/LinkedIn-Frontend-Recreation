import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExperiences } from "../redux/actions/getExperiences";

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
  const loading = useSelector((state) => {
    return state.loadedProfiles.loadingProfile;
  });

  const getExpData = (userId) => {
    // if (currentUser !== null) {
    //   if (profile !== null) {
    // if (isOnMyProfile === false) {
    dispatch(getExperiences(userId, ""));
    // } else if (isOnMyProfile === true) {
    //   await dispatch(getExperiences(currentUser._id, ""));
    // }
    //   }
    // }
  };

  useEffect(() => {
    getExpData(userId);
  }, []);

  useEffect(() => {
    getExpData(userId);
  }, [userId]);

  //   useEffect(() => {
  //     getExpData();
  //   }, [currentUser, profile]);

  console.log("EXPERIENCES:", experiences);

  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
        height: "25vh",
      }}
      className="mt-5 text-left position-relative"
    >
      {experiences.map((exp) => {
        return <p key={exp._id}>{exp.description}</p>;
      })}
    </div>
  );
};

export default ExperiencesSection;
