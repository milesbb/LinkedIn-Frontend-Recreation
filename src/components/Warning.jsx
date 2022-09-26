import { Alert } from "react-bootstrap";

const Warning = ({variant, message}) => {
  return (
    <Alert variant={variant}>{message}</Alert>
  );
};

export default Warning