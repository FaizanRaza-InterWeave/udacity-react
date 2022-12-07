import logo from "./logo.svg";
import { GamesPerUserTable } from "./components/GamesPerUserTable";
import { AddUser } from "./components/AddUser";
import "./App.css";

const App = () => {
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
                <AddUser />
              </div>
              <div class="row justify-content-end mt-3">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-2" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <GamesPerUserTable />
          </body>
        </div>
      </div>
    </>
  );
};

export default App;
