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
      <h1>Student</h1>
      <pre>{JSON.stringify(students)}</pre>
      <div className="row">
        {
          students.length > 0 ? 
          <>
            {students.map((student) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item bg-primary">{student.id}</li>
                        <li className="list-group-item bg-danger">{student.name}</li>
                        <li className="list-group-item bg-secondary">{student.age}</li>
                        <li className="list-group-item bg-primary">{student.subject}</li>
                        <li className="list-group-item bg-danger">{student.standard}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
         : null}
      </div>
    </div>
  );
};

export default Student;
