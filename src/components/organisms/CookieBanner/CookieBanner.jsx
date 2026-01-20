"use client";

import { useState, useEffect } from "react";
import "./CookieBanner.scss";
import Button from "@/components/atom/Button/Button";
import CookieIcon from "@/components/icons/CookieIcon"; // Mevcut ikon yapınıza göre

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kullanıcının daha önce seçim yapıp yapmadığını kontrol et
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (choice) => {
    localStorage.setItem("cookie_consent", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="cookie-banner d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="cookie-banner__icon">
            <CookieIcon size={24} />
          </div>
          <p className="cookie-banner__text mb-0">
            We use cookies to ensure that we give you the best experience on our
            website.
            <a href="/policies" className="ms-1">
              Read cookies policies.
            </a>
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn-decline"
            onClick={() => handleAction("declined")}
          >
            Decline
          </button>
          <Button
            variant="primary"
            size="md"
            onClick={() => handleAction("allowed")}
          >
            Allow
          </Button>
        </div>
      </div>
    </div>
  );
}
