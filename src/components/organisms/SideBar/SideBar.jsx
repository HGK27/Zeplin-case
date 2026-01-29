"use client";
import "./SideBar.scss";
import MobileMenuItem from "@/components/molecules/MobileMenuItem/MobileMenuItem";
import Button from "@/components/atom/Button/Button";
import SearchIcon from "@/components/icons/SearchIcon";
import ManagementIcon from "@/components/icons/ManagementIcon";
import AuthorIcon from "@/components/icons/AuthorIcon";

export default function Sidebar({ isOpen, onClose }) {
  const menu = [
    { href: "/amac-ve-kapsam", label: "Amaç ve Kapsam" },
    { href: "/etik-ilkeler", label: "Etik İlkeler ve Yayın Politikası" },
    { href: "/makale-cagrilari", label: "Makale Çağrıları" },
    { href: "/sayilar", label: "Sayılar" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <aside
      className={`mobileSidebar ${isOpen ? "isOpen" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="mobileSidebar__top">
        <button type="button" onClick={onClose} className="closeBtn">
          X
        </button>
      </div>

      <nav aria-label="Mobile navigation">
        <ul className="mobileMenu">
          {menu.map((item) => (
            <MobileMenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={onClose}
            />
          ))}
        </ul>
      </nav>
      <div className="sidebarButtonGroup d-flex flex-column align-items-center gap-4">
        <Button
          className="w-100"
          variant="primary"
          icon={ManagementIcon}
          iconPosition="left"
          size="lg"
        >
          Dergi Kurulu
        </Button>

        <Button
          className="w-100"
          variant="success"
          icon={AuthorIcon}
          iconPosition="left"
          size="lg"
        >
          Yazar Rehberi
        </Button>

        <div className="position-relative w-100">
          <SearchIcon className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input
            type="text"
            className="form-control ps-5 SideBarSearchBox"
            placeholder="Search..."
          />
        </div>
      </div>
    </aside>
  );
}
