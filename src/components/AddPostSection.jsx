import { FormControl, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddPostSection = () => {
  const currentUser = useSelector((state) => {
    return state.loadedProfiles.currentUser;
  });
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
      }}
      className="mt-5 text-left position-relative p-3"
    >
      <div className="d-flex">
        <Image
          src={currentUser.image}
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "150rem",
          }}
        />
        <InputGroup className="mt-1 ml-2">
          <FormControl
            placeholder="Start a post"
            aria-label="Start a post"
            aria-describedby="basic-addon2"
            style={{borderRadius: "50px"}}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default AddPostSection;
