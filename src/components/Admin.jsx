import axios from "axios";
import React from "react";

const Admin = () => {
  let [student, setStudent] = React.useState({
    id: "",
    name: "",
    age: "",
    subject: "",
    standard: "",
  });
  let updateHandler = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    let url = 'https://localhost:8080/apis/student'
    axios
      .post(url, student)
      .then(() => {})
      .catch();
    
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Admin</h1>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              <h2>Collect Student Info</h2>
              <pre>{JSON.stringify(student)}</pre>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="numbers"
                    className="form-control"
                    placeholder="studentId"
                    name="id"
                    onChange={updateHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="S-Name"
                    name="name"
                    onChange={updateHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="numbers"
                    className="form-control"
                    placeholder="S-age"
                    name="age"
                    onChange={updateHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="S-subject"
                    name="subject"
                    onChange={updateHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="numbers"
                    className="form-control"
                    placeholder="S-standard"
                    name="standard"
                    onChange={updateHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"className=" btn btn-success"placeholder="Submit" value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
