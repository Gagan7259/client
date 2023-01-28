import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <Link to="#" className="navbar-brand">
        Student details
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-list">
            {" "}
            <Link className="nav-link" to="/students">
              Students
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>{" "}
          </li>
          <li className="nav-list">
            {" "}
            <Link className="nav-link" to="/studentlist">
              StudentList
            </Link>{" "}
          </li>
          <li className="nav-list">
            {" "}
            <Link className="nav-link" to="/editl">
              Edit
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
