import React from "react";
import PropTypes from "prop-types";
import "./Badge.scss";

const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  return (
    <span
      className={`badge-atom badge-atom--${variant} badge-atom--${size} ${className}`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "info", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default Badge;
