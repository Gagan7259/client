import React from "react";
import axios from "axios";

const Student = () => {
  let [students, setstudents] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/apis/students")
      .then((response) => {
        setstudents(response.data);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="container">
      <div>
        <center>
          {" "}
          <h1>Student Data</h1>
        </center>{" "}
      </div>
      <div className="row">
        {students.length > 0 ? (
          <>
            {students.map((student) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h3>Student Details</h3>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item "> Id:{student.id}</li>
                        <li className="list-group-item ">
                          Name:{student.name}
                        </li>
                        <li className="list-group-item ">Age:{student.age}</li>
                        <li className="list-group-item ">
                          Subject:{student.subject}
                        </li>
                        <li className="list-group-item ">
                          Standard:{student.standard}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Student;
