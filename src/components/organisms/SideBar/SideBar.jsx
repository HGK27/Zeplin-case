"use client";
import Link from "next/link";
import "./Sidebar.scss";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        id="mobile-sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Menüyü kapat"
          >
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link href="/amac-ve-kapsam" onClick={onClose}>
            Amaç ve Kapsam
          </Link>
          <Link href="/etik-ilkeler" onClick={onClose}>
            Etik İlkeler
          </Link>
          <Link href="/makale-cagrilari" onClick={onClose}>
            Makale Çağrıları
          </Link>
          <Link href="/sayilar" onClick={onClose}>
            Sayılar
          </Link>
          <Link href="/iletisim" onClick={onClose}>
            İletişim
          </Link>
        </nav>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
}
