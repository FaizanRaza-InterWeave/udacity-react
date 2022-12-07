import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

export const AddUser = () => {
  return (
    <>
      <Row>
        <h2>Add User</h2>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>{" "}
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
