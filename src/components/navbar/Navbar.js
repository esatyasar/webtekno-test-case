import React from "react";
import "./Navbar.css";
import DropdownUserMenu from "../dropdownUserMenu/DropdownUserMenu";
import SearchBar from "../searchBar/SearchBar";
import NotificationsDropDown from "../notificationsDropdown/NotificationsDropdown";
import { BsSearch, BsPersonCircle, BsBell, BsList } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="navbar container navbar-expand-lg navbar-light nav">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <p className="logo">WEBTEKNO</p>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarTitles">
              <li className="nav-item">
                <a className=" linkTitle" aria-current="page" href="#">
                  Gündem
                </a>
              </li>
              <li className="nav-item">
                <a className=" linkTitle" href="#">
                  Haber
                </a>
              </li>
              <li className="nav-item">
                <a className=" linkTitle" href="#">
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a className=" linkTitle" href="#">
                  Kripto para
                </a>
              </li>
              <li className="nav-item">
                <a className=" linkTitle" href="#">
                  Mobil
                </a>
              </li>
              <li className="nav-item">
                <a className=" linkTitle" href="#">
                  Oyun
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className=" linkTitle dropdown-toggle"
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
                    <a className="dropdown-item" href="#">
                      Nasıl yapılır?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav navbarIcons">
              <li className="navbar-item userIcon">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#search"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <BsSearch className="searchBtn" />
                </a>
              </li>
              <div className="collapse userCardMenu" id="search">
                <div className="card card-body">
                  <SearchBar />
                </div>
              </div>
              <li className="userIcon">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#bell"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <BsBell className="bellBtn" />
                </a>
              </li>
              <div className="collapse userCardMenu" id="bell">
                <div className="card userCard">
                  <NotificationsDropDown />
                </div>
              </div>
              <li className="userIcon">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#personCircle"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <BsPersonCircle className="avatarBtn" />
                </a>
              </li>
              <div className="collapse userCardMenu" id="personCircle">
                <div className="card userCard">
                  <DropdownUserMenu />
                </div>
              </div>
              <li className="userIcon">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <BsList className="listBtn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="container-fluid" />
    </div>
  );
}

export default Navbar;
