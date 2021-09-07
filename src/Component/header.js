import React from "react";
import health from "../health.jpg";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={health} alt="" width="80" height="80" />
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.echannelling.com/Echannelling/video-channel-history"
              >
                Connect your doctor
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
