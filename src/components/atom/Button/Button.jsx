"use client";

import "./Button.scss";

export default function Button({
  children,
  variant = "primary", // primary | secondary | success | danger | outline
  size = "md", // sm | md | lg
  icon: Icon,
  iconPosition = "right", // left | right
  circle = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        btn
        btn--${variant}
        btn--${size}
        ${circle ? "btn--circle" : ""}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <span className="btn__icon left">
          <Icon size={16} />
        </span>
      )}

      {!circle && <span className="btn__text">{children}</span>}

      {Icon && iconPosition === "right" && (
        <span className="btn__icon right">
          <Icon size={16} />
        </span>
      )}
    </button>
  );
}
