import React from "react";
import "./DataRecovery.css";
import hddIcon from "../assets/icons/hdd.png";
import ssdIcon from "../assets/icons/ssd.png";
import usbIcon from "../assets/icons/usb.png";
import serverIcon from "../assets/icons/server.png";
import phoneIcon from "../assets/icons/phone.png";

export default function DataRecovery({ language = "tr" }) {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      paragraph: "TekFin olarak, HDD, SSD, USB bellek gibi...",
      services: [
        { icon: hddIcon, text: "Hard Disk Kurtarma" },
        { icon: ssdIcon, text: "SSD Kurtarma" },
        { icon: usbIcon, text: "Flash Bellek Kurtarma" },
        { icon: serverIcon, text: "RAID ve Sunucu Kurtarma" }
      ],
      privacy: "🔒 Verilerinizin gizliliği önceliğimizdir.",
      whyTitle: "Neden Bizi Tercih Etmelisiniz?",
      whyList: [
        "✅ Bozuk disklerde yüksek başarı oranı",
        "💰 Şeffaf fiyat politikası",
        "👨‍💻 Doğrudan teknik destek"
      ]
    },
    en: {
      title: "Data Recovery Services",
      paragraph: "At TekFin, we specialize in recovering lost data...",
      services: [
        { icon: hddIcon, text: "Hard Drive Recovery" },
        { icon: ssdIcon, text: "SSD Recovery" },
        { icon: usbIcon, text: "Flash Media Recovery" },
        { icon: serverIcon, text: "RAID and Server Recovery" }
      ],
      privacy: "🔒 Your data privacy is our priority.",
      whyTitle: "
