import React from "react";
import "./NotificationsDropdown.css";
import {
  BsChatLeft,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";

function NotificationsDropdown() {
  return (
    <div>
      <div>
        <p className="ms-3 me-3 mt-3 notification">BİLDİRİMLERİN</p>
        <hr class="divider" />
      </div>
      <div>
        <div className="d-flex border-bottom">
          <div>
            <BsChatLeft className="ms-3 me-2 chatIcon" />
          </div>
          <div>
            <p className="me-3 textSection">
              <span className="fw-bold">@malioztekin</span> yorumuna yanıt verdi
            </p>
            <p className="lastSeen">36 dk önce</p>
          </div>
          <hr class="divider" />
        </div>
        <div className="d-flex border-bottom ">
          <div>
            <BsFillHandThumbsUpFill className="ms-3 me-2 likeIcon" />
          </div>
          <div>
            <p className="me-3 textSection">
              <span className="fw-bold">@omeryilmazel</span> yorumunu +1’ledi
            </p>
            <p className="lastSeen">1 s önce</p>
          </div>
        </div>
        <div className="d-flex border-bottom ">
          <div>
            <BsFillHandThumbsDownFill className="ms-3 me-2 unlikeIcon" />
          </div>
          <div>
            <p className="me-3 textSection">
              <span className="fw-bold">@haldun</span> yorumunu -1’ledi
            </p>
            <p className="lastSeen">dün</p>
          </div>
        </div>
        <div className="d-flex ">
          <div>
            <BsChatLeft className="ms-3 me-2 chatIcon" />
          </div>
          <div>
            <p className="me-3 textSection">
              <span className="fw-bold">@fatihkahveci</span> yorumuna yanıt
              verdi
            </p>
            <p className="lastSeen">evvelsi gün</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsDropdown;
