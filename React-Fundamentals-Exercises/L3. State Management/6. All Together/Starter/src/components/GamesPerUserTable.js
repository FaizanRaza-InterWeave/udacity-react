import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ListUser } from "./ListItem";
import { useState } from "react";

export const GamesPerUserTable = () => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(false);
  return (
    <>
      <div className="row justify-content-center">
        <h2>Games Per User</h2>
      </div>
      <div className="row justify-content-center">
        <ul className="list-group col-6">
          <ListUser
            username="musky"
            gamesPlayed="1"
            showGamesPlayed={showGamesPlayed}
          />
          <ListUser
            username="ball"
            gamesPlayed="2"
            showGamesPlayed={showGamesPlayed}
          />
          <ListUser
            username="sweat"
            gamesPlayed="3"
            showGamesPlayed={showGamesPlayed}
          />
        </ul>
      </div>
      <Row className="row justify-content-center">
        <Col>
          <SwitchExample
            setShowGamesPlayed={setShowGamesPlayed}
            showGamesPlayed={showGamesPlayed}
          />
        </Col>
      </Row>
    </>
  );
};

function SwitchExample({ showGamesPlayed, setShowGamesPlayed }) {
  return (
    <Form className="row justify-content-center align-items-left float-left">
      <Col xs="auto" className="my-1">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Show Games Played"
          onChange={(event) => {
            setShowGamesPlayed(event.target.checked);
          }}
          checked={showGamesPlayed}
        />
      </Col>
    </Form>
  );
}
