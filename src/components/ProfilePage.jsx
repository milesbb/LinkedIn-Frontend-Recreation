import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/getProfileInfo";
import Loading from "./Loading";
import Warning from "./Warning";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  const loading = useSelector((state) => {
    return state.loadedProfiles.loadingProfile;
  });
  const errorOccurred = useSelector((state) => {
    return state.loadedProfiles.errorProfile;
  });
  console.log(currentUser);
  useEffect(() => {
    dispatch(getProfile("me"));
  }, []);

  return (
    <div>
      {loading && <Loading />}

      {!loading && (errorOccurred || currentUser === null) && <Warning />}

      {!loading && !(errorOccurred || currentUser === null) && (
        <h1>{currentUser.name + " " + currentUser.surname}</h1>
      )}
    </div>
  );
};

export default ProfilePage;
