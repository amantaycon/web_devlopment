import React from "react";
import { NavLink } from "react-router-dom";
const setActive = ({isActive})=>{
  return {
    color: isActive?"yellow":"white"
  }
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background: "black"}}>
      <div className="container-fluid" style={{background: "black"}}>
        <NavLink className="navbar-brand" to="/" style={{color: "white"}}>
          React JS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" style={setActive}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter" style={setActive}>
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="from" style={setActive}>
                From
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/table"} style={setActive}>
                {" "}
                Table{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/query?info=Java"} style={setActive}>
                {" "}
                Language{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/useeffect"} style={setActive}>
                {" "}
                UseEffect{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/usecontext"} style={setActive}>
                {" "}
                UseContext{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/usereducer"} style={setActive}>
                {" "}
                UseReducer{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const SubHeader = () => {
  return (
    <>
      <h3>Header sub</h3>
    </>
  );
};

export { SubHeader };
export default Header;
