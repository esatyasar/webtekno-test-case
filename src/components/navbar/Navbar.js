import React from "react";
import "./Navbar.css";
import DropdownUserMenu from "../dropdownUserMenu/DropdownUserMenu";
import SearchBar from "../searchBar/SearchBar";
import NotificationsDropDown from "../notificationsDropdown/NotificationsDropdown";
import { BsSearch, BsPersonCircle, BsBell, BsList } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="navbar container fixed-top navbar-expand navbar-light nav">
        <div className="container-fluid navbarContainer">
          <a className="navbar-brand " href="#">
            <p className="logo">WEBTEKNO</p>
          </a>
          <div className="collapse navbar-collapse navbarItemsContainer ">
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
              <li>
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
              <div
                className="collapse collapse-horizontal contianer collapseSearchBar"
                id="search"
              >
                <div className="card collapseSearch">
                  <SearchBar />
                </div>
              </div>
              <li className="userIcons">
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
              <div
                className="collapse collapse-horizontal container collapseMenu"
                id="bell"
              >
                <div className="card userCard">
                  <NotificationsDropDown />
                </div>
              </div>
              <li>
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#personCircle"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img
                    src="https://picsum.photos/id/237/40/40"
                    alt="ProfilePic"
                    className="avatarBtn"
                  />
                </a>
              </li>
              <div
                className="collapse collapse-horizontal container collapseMenu"
                id="personCircle"
              >
                <div className="card userCard">
                  <DropdownUserMenu />
                </div>
              </div>
              <li>
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
    </div>
  );
}

export default Navbar;
