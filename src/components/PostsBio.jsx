import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsBio = () => {
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
      }}
      className="mt-5 text-center position-relative"
    >
      <Image
        className="position-absolute"
        style={{
          width: "5rem",
          left: "34%",
          top: "10%",
          background: "white",
          borderRadius: "150rem",
          border: "solid 3px white",
        }}
        src={currentUser.image}
      />
      <div
        style={{
          background: "gray",
          overflow: "hidden",
          height: "9vh",
          borderRadius: "10px 10px 0 0",
        }}
        className="w-100 mb-5"
      ></div>
      <div className="mt-5 mx-auto d-flex w-75">
        <div className="mx-auto">
          <Link to="/profiles/me" className="nav-link" style={{ color: "black" }}>
            <h2>{currentUser.name + " " + currentUser.surname}</h2>
            <h4>{currentUser.title}</h4>
            <p>{currentUser.area}</p>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="text-left ml-3 mb-5">
        <p>Connections</p>
        <p className="font-weight-bold">Grow your network</p>
        <p>Who's viewed your profile</p>
      </div>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default PostsBio;
