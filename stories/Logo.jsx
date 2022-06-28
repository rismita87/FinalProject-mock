import React from "react";
import PropTypes from "prop-types";
import "./Logo.styles.css";

export const Logo = ({ size, label1, label2 }) => {
  const classNameSetter =
    size === "large" || size === "medium" ? "logo-large" : "logo-small";

  return (
    <div className={[classNameSetter].join(" ")}>
      <div className={["label1", classNameSetter].join(" ")}>{label1}</div>
      <div className={["label2", classNameSetter].join(" ")}>{label2}</div>
    </div>
  );
};
Logo.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label1: PropTypes.string,
  label2: PropTypes.string,
};
Logo.defaultProps = {
  size: "large",
  label1: "KAOSPILOT",
  label2: "toolbox",
};
