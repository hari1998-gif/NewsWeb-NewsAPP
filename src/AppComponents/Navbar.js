import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"style={{padding:"3px"}} >
        <div className="container-fluid" style={{cursor: 'pointer'}}>
          <Link className="navbar-brand" to="/">
            <strong
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              NEWS WEB
            </strong>
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{cursor: 'pointer'}}>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/health">Health</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/science">Science</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/sports">Sports</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

