import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const StudentList = () => {
  let [students, setstudents] = React.useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/apis/students")
      .then((response) => {
        setstudents(response.data);
      })
      .catch(() => {});
  }, []);
  let deletestudent = (id) => {
    console.log("hello");
    let url = `http://localhost:8080/apis/student/${id}`;
    axios.delete(url).then(() => {});
    navigate(0).catch();
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <div className="row">
        <div className="col-md-10">
          <table className="table">
            <thead className="bg-primary">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Subject</th>
                <th>Standard</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                <>
                  {students.map((student, index) => {
                    return (
                      <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.subject}</td>
                        <td>{student.standard}</td>
                        <td>
                          <Link
                            onClick={deletestudent.bind(this, student.id)}
                            className=" btn btn-danger mr-1 "
                          >
                            Delete
                          </Link>{" "}
                          <Link to={`/editl`} className=" btn btn-warning mr-1">
                            Update
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
