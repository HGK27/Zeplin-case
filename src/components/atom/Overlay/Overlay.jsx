"use client";
import "./Overlay.scss";

export default function Overlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Close menu overlay"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Enter" && onClose()}
      className="overlay"
    />
  );
}
