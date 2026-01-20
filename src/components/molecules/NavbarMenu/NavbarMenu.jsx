"use client";
import Button from "@/components/atom/Button/Button";
import SearchIcon from "@/components/icons/SearchIcon";
import ManagementIcon from "@/components/icons/ManagementIcon";
import AuthorIcon from "@/components/icons/AuthorIcon";
import "./NavbarMenu.scss";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";

export default function NavbarMenu() {
  return (
    <div className="NavbarMenu">
      {/* MOBILE TOGGLE */}
      <button className="home-button">
        <HomeIcon />
      </button>

      {/* MENU */}
      <div className="mainNavbar" id="mainNavbar">
        <nav className="mainNav">
          <ul className="mainNav__list">
            <li className="mainNav__item">
              <Link href="/amac-ve-kapsam" className="mainNav__link">
                Amaç ve Kapsam
              </Link>
            </li>

            <li className="mainNav__item">
              <Link href="/etik-ilkeler" className="mainNav__link">
                Etik İlkeler ve Yayın Politikası
              </Link>
            </li>

            <li className="mainNav__item">
              <Link href="/makale-cagrilari" className="mainNav__link">
                Makale Çağrıları
              </Link>
            </li>

            <li className="mainNav__item">
              <Link href="/sayilar" className="mainNav__link">
                Sayılar
              </Link>
            </li>

            <li className="mainNav__item">
              <Link href="/iletisim" className="mainNav__link">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="d-flex align-items-center gap-2">
          <Button
            variant="primary"
            icon={ManagementIcon}
            iconPosition="left"
            size="lg"
          >
            Dergi Kurulu
          </Button>

          <Button
            variant="success"
            icon={AuthorIcon}
            iconPosition="left"
            size="lg"
          >
            Yazar Rehberi
          </Button>

          <Button variant="secondary" icon={SearchIcon} size="sm"></Button>
        </div>
      </div>
    </div>
  );
}
