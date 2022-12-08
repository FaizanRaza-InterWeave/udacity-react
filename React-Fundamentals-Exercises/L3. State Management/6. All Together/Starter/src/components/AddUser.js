import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";

export const AddUser = ({ users, setUsers }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      <Row>
        <h2>Add User</h2>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            >
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>{" "}
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            >
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setUsers([
              ...users,
              {
                firstName,
                lastName,
                userName,
                gamesPlayed: 0,
              },
            ]);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
