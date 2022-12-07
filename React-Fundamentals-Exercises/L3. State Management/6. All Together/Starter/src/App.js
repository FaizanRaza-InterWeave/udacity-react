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
            </div>
          </body>
        </div>
      </div>
    </>
  );
};

export default App;
