import React from "react";
import "../styles/DataRecovery.css";
import hddIcon from "../assets/icons/hdd.png";
import ssdIcon from "../assets/icons/ssd.png";
import usbIcon from "../assets/icons/usb.png";
import serverIcon from "../assets/icons/server.png";
import phoneIcon from "../assets/icons/phone.png";

export default function DataRecoveryEN() {
  return (
    <div className="container">
      <h2>Data Recovery Services</h2>
      <p>
        At TekFin, we specialize in recovering lost data from various storage devices including HDDs, SSDs, USB drives, and more.
        Whether you are a business or an individual, our professional recovery solutions ensure the highest possible retrieval rates.
      </p>
      <div className="services-grid">
        <div className="card"><img src={hddIcon} alt="HDD"/><p>Hard Drive Recovery</p></div>
        <div className="card"><img src={ssdIcon} alt="SSD"/><p>SSD Recovery</p></div>
        <div className="card"><img src={usbIcon} alt="USB"/><p>Flash Media Recovery</p></div>
        <div className="card"><img src={serverIcon} alt="Server"/><p>RAID and Server Recovery</p></div>
        <div className="card"><img src={phoneIcon} alt="Phone"/><p>Phone and Tablet Data Recovery</p></div>
      </div>
      <p className="privacy-note">🔒 Your data privacy is our priority.</p>
      <div className="why-choose">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ High success rate</li>
          <li>💰 Transparent pricing</li>
          <li>👨‍💻 Direct technical support</li>
        </ul>
      </div>
    </div>
  );
}
