import React from "react";
import "../styles/DataRecovery.css";
import hddIcon from "../assets/icons/hdd.png";
import ssdIcon from "../assets/icons/ssd.png";
import usbIcon from "../assets/icons/usb.png";
import serverIcon from "../assets/icons/server.png";
import phoneIcon from "../assets/icons/phone.png";

export default function DataRecoveryTR() {
  return (
    <div className="container">
      <h2>Veri Kurtarma Hizmetleri</h2>
      <p>
        TekFin olarak, HDD, SSD, USB bellek gibi çeşitli veri depolama cihazlarından kaybolan verileri kurtarma konusunda uzmanız.
        İster bireysel ister kurumsal olun, profesyonel çözümlerimiz en yüksek başarı oranını sunar.
      </p>
      <div className="services-grid">
        <div className="card"><img src={hddIcon} alt="HDD"/><p>Hard Disk Kurtarma</p></div>
        <div className="card"><img src={ssdIcon} alt="SSD"/><p>SSD Kurtarma</p></div>
        <div className="card"><img src={usbIcon} alt="USB"/><p>Flash Bellek Kurtarma</p></div>
        <div className="card"><img src={serverIcon} alt="RAID"/><p>RAID ve Sunucu Kurtarma</p></div>
        <div className="card"><img src={phoneIcon} alt="Phone"/><p>Telefon ve Tablet Kurtarma</p></div>
      </div>
      <p className="privacy-note">🔒 Verilerinizin gizliliği önceliğimizdir.</p>
      <div className="why-choose">
        <h3>Neden Bizi Tercih Etmelisiniz?</h3>
        <ul>
          <li>✅ Bozuk disklerde yüksek başarı oranı</li>
          <li>💰 Şeffaf fiyat politikası</li>
          <li>👨‍💻 Doğrudan teknik destek</li>
        </ul>
      </div>
    </div>
  );
}
