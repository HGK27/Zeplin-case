"use client";
import React from "react";
import "./Header.scss";
import Logo from "@/assets/images/LogoGroup.png";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "../../molecules/NavbarMenu/NavbarMenu";
import MessageIcon from "@/components/icons/MessageIcon";

export default function Header() {
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
        </div>
      </div>
    </header>
  );
}
