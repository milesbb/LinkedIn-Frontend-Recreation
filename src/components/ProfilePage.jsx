
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../redux/actions/getProfileInfo";
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

  
  console.log(params.userId)

  useEffect(() => {
    if (params.userId === undefined) {
      dispatch(getProfile("me"));
      console.log(currentUser);
    } else {
      dispatch(getProfile(params.userId));
      console.log(profile)
    }
  }, [params.userId]);

  return (
    <div>
      {loading && <Loading />}

      {!loading && (errorOccurred || currentUser === null) && <Warning />}

      {!loading && !(errorOccurred || currentUser === null) && ( isOnMyProfile?
        <div>
          <h1>{currentUser.name + " " + currentUser.surname}</h1>
          <Link to={"/profiles/" + "5fc4ae95b708c200175de88d"}>test</Link>
          <SideProfiles/>
        </div> 
        : 
        <div>
          <h1>{profile.name + " " + profile.surname}</h1>
          <Link to={"/"}>test</Link>
        </div> 
      )}
    </div>
  );
};

export default ProfilePage;
