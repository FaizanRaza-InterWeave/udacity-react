import logo from "./logo.svg";
import { GamesPerUserTable } from "./components/GamesPerUserTable";
import { AddUser } from "./components/AddUser";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Musky",
      lastName: "Balls",
      userName: "MuskyBalls",
      gamesPlayed: 1,
    },
    {
      firstName: "Sweaty",
      lastName: "Crack",
      userName: "SweatyCrack",
      gamesPlayed: 2,
    },
    {
      firstName: "Wiz",
      lastName: "Queefa",
      userName: "WizQueefa",
      gamesPlayed: 3,
    },
  ]);
  return (
    <>
      <div class="container-fluid-lg">
        <div className="App row">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
          <body>
            <div class="container-lg">
              <div className="row justify-content-start">
                <AddUser users={users} setUsers={setUsers} />
              </div>
              <div class="row justify-content-end mt-3">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-2" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <GamesPerUserTable users={users} />
          </body>
        </div>
      </div>
    </>
  );
};

export default App;
