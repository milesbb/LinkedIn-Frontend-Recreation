import { format, formatDuration, intervalToDuration } from "date-fns";
import { Col, Image, ListGroupItem, Row } from "react-bootstrap";

const ExperienceItem = ({ exp }) => {
  return (
    <ListGroupItem className="position-relative">
      <div className="d-flex">
        <div>
          <Image
            style={{
              borderRadius: "100rem",
              width: "60px",
              height: "60px",
            }}
            src="https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715?b=1&k=20&m=1314037715&s=170667a&w=0&h=vFoSrBkotNvWgwfQz013ZuLzGw0aWJfLeMkCPTuAxQY="
            alt="logo"
          />
        </div>

        <div className="ml-3">
          <p>
            <strong> {exp.company} </strong>
          </p>
          <p>{exp.role}</p>
          <p style={{ color: "gray" }}>
            {format(new Date(exp.startDate), "MMM yyyy") +
              "" +
              " - " +
              formatDuration(
                intervalToDuration({
                  start: new Date(exp.startDate),
                  end: new Date(),
                }),
                { format: ["months"] }
              )}
            <br></br>
            {exp.area}
          </p>

          <p>{exp.description}</p>
        </div>
        <div className="position-absolute" style={{ right: "1rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default ExperienceItem;
