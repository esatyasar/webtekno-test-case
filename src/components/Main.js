import React from "react";
import "../styles/Main.css";

function Main() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <div className="col news1 d-flex flex-column justify-content-end">
          <h2 className="newsSubtitle">
            Metaverse Zuckerberg’in elinde güvenli değil
          </h2>
          <div className="d-flex newsNotifications">
            <p className="me-2">2s önce</p>
            <p>3 yorum</p>
          </div>
        </div>
        <div className="col news2 d-flex flex-column justify-content-end">
          <h2 className="newsSubtitle">
            Netflix'in Aralık ayında yayınlanacak içerikleri belli oldu
          </h2>
          <div className="d-flex newsNotifications">
            <p className="me-2">2s önce</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col news3 d-flex flex-column justify-content-end">
          <h4 className="newsSubtitle2">
            Netflix'in Aralık ayında yayınlanacak içerikleri belli oldu
          </h4>
          <div className="d-flex newsNotifications">
            <p className="me-2">2s önce</p>
            <p>5 yorum</p>
          </div>
        </div>
        <div className="col news4 d-flex flex-column justify-content-end">
          <h4 className="newsSubtitle2">
            Elon Musk, 1 trilyon getiren anlaşmanın imzalanmadığını
            söyledi
          </h4>
          <div className="d-flex newsNotifications">
            <p className="me-2">2s önce</p>
            <p>17 yorum</p>
          </div>
        </div>
        <div className="col news5 d-flex flex-column justify-content-end">
        <h4 className="newsSubtitle2">
            Tüm Zamanların En Güçlü Porsche si: 911 Turbo S Exclusive
          </h4>
          <div className="d-flex newsNotifications">
            <p className="me-2">2s önce</p>
            <p>17 yorum</p>
          </div>
        </div>
      </div>
      <h1 className="newContents">YENİ İÇERİKLER </h1>
      <div className="row">
        <div className="col">
            <p className='mobileApp'>Mobil Uygulama</p>
            <p className='news6Content'>Spotify, kişilerin dinleme zevklerini birleştiren Blend özelliğini getiriyor</p>
            <div className='news6Hr'></div>
            <div className='d-flex'>
              <img src="https://picsum.photos/id/237/40/40" alt="dog" />
              <p className='userName'>Mark Zuckenberg <span> - </span> <span>12 dk önce</span></p>
               
            </div>
        </div>
        <div className="col news6"></div>
      </div>
    </div>
  );
}

export default Main;
