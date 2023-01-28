import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
  let [studentID, setstudentID] = useState(useParams().id);
  let [selectedstudent, setSelectedstudent] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: "",
  });
  let [submitted, setSubmitted] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");
  let setID = (id) => {
    setstudentID(id);
  };
  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/products/${studentID}`;
    Axios.get(url)
      .then((response) => {
        setSelectedstudent(response.data);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  }, [studentID]);

  let changeInput = (event) => {
    setSelectedstudent({
      ...selectedstudent,
      [event.target.name]: event.target.value,
    });
  };

  let submitHandler = (event) => {
    event.preventDefault();
    let dataURL = `http://localhost:8080/apis/student`;
    Axios.put(dataURL, setSelectedstudent)
      .then((res) => {
        setSubmitted(true);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <pre>{JSON.stringify(selectedstudent)}</pre>
        <pre>{JSON.stringify(submitted)}</pre>
        <pre>{JSON.stringify(studentID)}</pre>
        {submitted ? (
          <>
            <Navigate to="/Admin" />
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header bg-dark text-white text-center">
                    <h1>Edit Product</h1>
                  </div>
                  <div className="card-body bg-secondary">
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={setSelectedstudent.name}
                          placeholder="Product Name"
                          className="form-control"
                          onChange={changeInput}
                        />
                      </div>

                      <div className="form-group">
                        <input type="number"name="age"value={setSelectedstudent.age}placeholder="age"className="form-control"onChange={changeInput}/>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="subject"
                          value={setSelectedstudent.subject}
                          placeholder="subject"
                          className="form-control"
                          onChange={changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="standard"
                          value={setSelectedstudent.standard}
                          placeholder="standard"
                          className="form-control"
                          onChange={changeInput}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Create Product"
                        className="btn btn-dark"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Edit;
