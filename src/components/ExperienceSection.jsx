import { Col, ListGroup, Row, Image } from "react-bootstrap";
import { format } from "date-fns";

const ExperienceSection = (experience) => {
  // const getMonthDifference = (start, end) => {
  //   return (
  //     end.getMonth() -
  //     start.getMonth() +
  //     12 * (end.getFullYear() - start.getFullYear())
  //   );
  // };

  return (
    <div>
      <ListGroup variant="flush" className="bg-white">
        <div className="d-flex justify-content-between">
          <h2 className="ml-2">Experience</h2>
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus-lg mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
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
        <ListGroup.Item>
          <Row>
            <Col xs={1}>
              <Image
                style={{
                  borderRadius: "100rem",
                  width: "40px",
                  height: "40px",
                }}
                src="https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715?b=1&k=20&m=1314037715&s=170667a&w=0&h=vFoSrBkotNvWgwfQz013ZuLzGw0aWJfLeMkCPTuAxQY="
                alt="logo"
              />
            </Col>
            <Col xs={11} className="text-left p-0">
              <p>
                <strong> {experience.company} </strong>
              </p>
              <p>{experience.role} · postion</p>
              <p style={{ color: "gray" }}>
                {/* {format(new Date(experience.startDate), "MMMM/YYYY")} -
                {format(new Date(experience.endDate), "MMMM/YYYY")} ·{" "}
                {getMonthDifference(experience.startDate, experience.endDate)}{" "} */}
                <br /> {experience.area}
              </p>

              <p>·{experience.description}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ExperienceSection;
