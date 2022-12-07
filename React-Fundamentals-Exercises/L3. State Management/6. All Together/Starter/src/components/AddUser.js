export const AddUser = () => {
  return (
    <>
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
    </>
  );
};
