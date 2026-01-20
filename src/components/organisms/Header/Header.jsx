"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.scss";
import Logo from "@/assets/images/LogoGroup.png";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "../../molecules/NavbarMenu/NavbarMenu";
import MessageIcon from "@/components/icons/MessageIcon";
import MenuIcon from "@/components/icons/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.body.classList.add("open-sidebar");
    } else {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("close-sidebar");
    }
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-column">
        <div className="headerBrand">
          <div className="brandContent">
            {/* LOGO */}
            <Link className="headerLogo" href="/">
              <Image src={Logo} alt="Profuture"></Image>
            </Link>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerInfo">
            <div className="headerInfo-left">
              <MessageIcon size={18} />
              <span>profuture@gmail.com</span>
            </div>
            <div className="headerInfo-right">
              <span>
                ISSN: <b>345-255</b>
              </span>
              <span>
                Başlangıç: <b>2025 </b>
              </span>
              <span>
                Periyot: <b>Yılda 2 Sayı</b>
              </span>
            </div>
          </div>
          <NavbarMenu />
          <div className="menu-icon" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
