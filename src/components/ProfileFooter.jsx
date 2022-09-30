import { Col, Container, Form, Row } from "react-bootstrap";

const ProfileFooter = () => {
  return (
    <div className="text-center text-lg-left mt-5">
      <Container className="p-4">
        <Row>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <div className="position-absolute" style={{ top: -40 }}>
              <p style={{ color: "#0766c2", fontSize: "1.5rem" }}>
                Linked
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ color: "#0766c2" }}
                  className="bi bi-linkedin ml-1 mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </p>
            </div>
            <ul
              className="list-unstyled mb-0 font-weight-bold"
              style={{ fontSize: "0.7rem" }}
            >
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Community Guidelines
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Privacy & Terms
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ color: "gray" }}
                    className="bi bi-chevron-down ml-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Sales Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Safety Center
                </a>
              </li>
              <li className="mt-4" style={{ color: "gray" }}>
              LinkedIn Corporation © 2022
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <ul
              className="list-unstyled mb-0 font-weight-bold"
              style={{ fontSize: "0.7rem" }}
            >
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Accessibility
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Ad Choices
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Mobile
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={12} className="mb-4 mb-md-0">
            <ul
              className="list-unstyled mb-0 font-weight-bold"
              style={{ fontSize: "0.7rem" }}
            >
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Talent Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Marketing Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Advertising
                </a>
              </li>
              <li className="mb-2">
                <a href="" style={{ color: "gray" }}>
                  Small Business
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={12} className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem" }}>
              <li className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ color: "gray" }}
                  className="bi bi-question-circle-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <a href="" style={{ color: "gray" }}>
                  <span className="font-weight-bold">Questions?</span>

                  <br></br>
                  <span className="ml-4" style={{ fontSize: "0.7rem" }}>
                    Visit our Help Center.
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ color: "gray" }}
                  className="bi bi-gear-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                <a href="" style={{ color: "gray" }}>
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Manage your account and privacy
                  </span>

                  <br></br>
                  <span className="ml-4" style={{ fontSize: "0.7rem" }}>
                    Go to your Settings.
                  </span>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={12} className="mb-4 mb-md-0">
            <div>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label style={{ fontSize: "0.8rem" }}>
                    Select Language
                  </Form.Label>
                  <Form.Control
                    style={{ fontSize: "0.9rem", border: "solid 1px black" }}
                    as="select"
                  >
                    <option>English (English)</option>
                    <option>Deutsch (German)</option>
                    <option>Français (French)</option>
                    <option>Italiano (Italian)</option>
                    <option>Español (Spanish)</option>
                    <option>Dansk (Danish)</option>
                    <option>Svenska (Swedish)</option>
                    <option>Português (Portuguese</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileFooter;
