import logo from "./logo.svg";
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
                <div className="row">
                  <h2>Add User</h2>
                </div>
                <div className="row">
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    ></input>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    ></input>
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                    ></input>
                  </div>
                </div>
              </div>
              <div class="row justify-content-end mt-3">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-2" type="button">
                    Button
                  </button>
                </div>
              </div>
              <div className="row justify-content-center">
                <h2>Games Per User</h2>
              </div>
              <div className="row justify-content-center">
                <ul class="list-group col-6">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Musky
                    <span class="badge bg-primary rounded-pill">1</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Ball
                    <span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Sweat
                    <span class="badge bg-primary rounded-pill">3</span>
                  </li>
                </ul>
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
};

export default App;
