'use client';

import styles from './ToggleButton.module.scss';

export default function ToggleButton({
  label,
  active = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`btn ${styles.toggleButton} ${active ? styles.active : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
