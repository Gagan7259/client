import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  let selectedid = useParams().id;
  let [selectedstudent, setSelectedstudent] = useState({
    id: "",
    name: "",
    age: "",
    subject: "",
    standard: "",
  });
  let [submited, setsubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/apis/students/${selectedid}")
      .then((response) => {
        setSelectedstudent(response.data);
      })
      .catch();
  }, []);
  let getdata = (event) => {
    setSelectedstudent({
      ...selectedstudent,
      [event.target.name]: event.target.value,
    });
  };
  let submitData = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/apis/students/${selectedid}", selectedstudent)
      .then((response) => {
        setsubmitted(true);
      })
      .catch();
  };
  return (
    <div className="container">
      <h1>Edit Student Details</h1>
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={submitData}>
            <div className="card">
              <div className="card-header">
                <h1>Edit Student Details</h1>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Student Id :</label>
                  <input
                    type="text"
                    value={selectedstudent.id}
                    onChange={getdata}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Student Name :</label>
                  <input
                    value={selectedstudent.name}
                    type="text"
                    onChange={getdata}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Student Age :</label>
                  <input
                    value={selectedstudent.age}
                    type="text"
                    onChange={getdata}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Student Standard :</label>
                  <input
                    type="text"
                    value={selectedstudent.standard}
                    onChange={getdata}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Student subject :</label>
                  <input
                    type="text"
                    value={selectedstudent.subject}
                    onChange={getdata}
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-warning"
                    value="Upadte"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
