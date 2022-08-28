import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.navTitle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.navItemOne}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className={`form-check-label text-${props.mode==="light"? 'dark' : "light"}`} htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
           </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navTitle: PropTypes.string.isRequired,
  navItemOne: PropTypes.number.isRequired,
};
Navbar.defaultProps = {
  navTitle: "this is navbar",
  navItemOne: " this is navbar first item",
};
