import React from "react";
import "./DropdownUserMenu.css";
import {
  BsMoonFill,
  BsToggleOff,
  BsPencilSquare,
  BsBookmark,
  BsHeart,
  BsChatLeft,
  BsBoxArrowRight,
} from "react-icons/bs";

function DropdownUserMenu() {
  return (
    <div>
      <div className="pt-3">
        <p className="ms-3 me-3 txtWelcome">HOŞGELDİN</p>
        <p className="ms-3 me-3 txtName">Mehmet Ali Öztekin</p>
        <hr class="divider" />
      </div>
      <div className="ms-2 me-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsMoonFill className="my-auto userMenuIcons" />
            <p className="ms-2 my-auto my-auto userMenuItems">Gece Modu</p>
          </div>
          <BsToggleOff className="me-3 my-auto userMenuIcons" />
        </div>
        <div className="d-flex justify-content-between active">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsPencilSquare className="my-auto " />
            <p className="ms-2 my-auto">Profili Düzenle</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsBookmark className="my-auto userMenuIcons" />
            <p className="ms-2 my-auto userMenuItems">Kaydettiklerim</p>
          </div>
          <p className="me-3 my-auto numberInteraction">26</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsHeart className="my-auto userMenuIcons" />
            <p className="ms-2 my-auto userMenuItems">Tepkilerim</p>
          </div>
          <p className="me-3 my-auto numberInteraction">1.2K</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsChatLeft className="my-auto userMenuIcons" />
            <p className="ms-2 my-auto userMenuItems"> Yorumlarim</p>
          </div>
          <p className="me-3 my-auto numberInteraction">1</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex justify-content-start mt-2 mb-2 ms-3">
            <BsBoxArrowRight className="my-auto userMenuIcons" />
            <p className="ms-2 my-auto userMenuItems">Çıkış yap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownUserMenu;
