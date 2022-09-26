import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/getProfileInfo";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  console.log(currentUser)
  useEffect(() => {
    dispatch(getProfile("me"));
  }, []);

  return (
    <div>
      <h1>{currentUser.name + " " + currentUser.surname}</h1>
    </div>
  );
};

export default ProfilePage;
