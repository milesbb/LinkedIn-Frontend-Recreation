import { format, formatDuration, intervalToDuration } from "date-fns";
import { Col, Image, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ExperienceItem = ({ exp, itemKey, userId }) => {
  const isOnMyProfile = useSelector((state) => {
    return state.loadedProfiles.isOnMyProfile;
  });
  return (
    <ListGroupItem className="position-relative" style={{ border: "none" }}>
      <div className="d-flex">
        <div>
          <Image
            style={{
              
              width: "60px",
              height: "60px",
            }}
            src={exp.image}
            alt="logo"
          />
        </div>

        <div className="ml-3">
          <p>
            <strong> {exp.role} </strong>
          </p>
          <p>{exp.company}</p>
          <p style={{ color: "gray" }}>
            {format(new Date(exp.startDate), "MMM yyyy") +
              " - " +
              formatDuration(
                intervalToDuration({
                  start: new Date(exp.startDate),
                  end: new Date(),
                }),
                { format: ["months", "days"] }
              )}
            <br></br>
            {exp.area}
          </p>

          <p>{exp.description}</p>
        </div>
        <div className="position-absolute" style={{ right: "1.4rem" }}>
          {isOnMyProfile && (
            <div className="d-flex text-right">
              <EditButton
                purpose="exp"
                data={exp}
                id={itemKey}
                userId={userId}
              />
              <DeleteButton id={itemKey} userId={userId} purpose="deleteExp"/>
            </div>
          )}
        </div>
      </div>
      <hr></hr>
    </ListGroupItem>
  );
};

export default ExperienceItem;
