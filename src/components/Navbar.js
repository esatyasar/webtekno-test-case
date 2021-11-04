import React from "react";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            WEBTEKNO
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
                    Gündem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Haber
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kripto para
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mobil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Oyun
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Daha fazla
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Liste
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      İnceleme
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nasıl yapılır?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
