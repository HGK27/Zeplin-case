"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.scss";
import Logo from "@/assets/images/LogoGroup.png";
import MobileLogo from "@/assets/images/mobile-logo.webp";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "../../molecules/NavbarMenu/NavbarMenu";
import MessageIcon from "@/components/icons/MessageIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import useMediaQuery from "@/hooks/useMediaQuery";
import Overlay from "@/components/atom/Overlay/Overlay";
import Sidebar from "@/components/organisms/Sidebar/SideBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 720px)");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="header-column">
          <div className="headerBrand">
            <div className="brandContent">
              {/* LOGO */}
              <Link className="headerLogo" href="/">
                <Image
                  src={isMobile ? MobileLogo : Logo}
                  alt="Profuture"
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="headerRight">
            <div className="headerInfo">
              <div className="headerInfo-left">
                <MessageIcon size={18} />
                <a href="mailto:profuture@gmail.com">profuture@gmail.com</a>
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

      <Overlay isOpen={isOpen} onClose={toggleMenu} />
      <Sidebar isOpen={isOpen} onClose={toggleMenu} />
    </>
  );
}
