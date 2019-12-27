import React, { useContext } from "react";
import themeContext from "../../context/themeContext";
import "./Icon.scss";
export default function Icon({ size = 24, children }) {
  const { theme } = useContext(themeContext);
  return (
    <div
      style={{ fontSize: `${size}px`, lineHeight: `${size}px` }}
      className={`icon ${theme.name === "light" ? "icon-light" : "icon-dark"}`}
    >
      {children}
    </div>
  );
}
