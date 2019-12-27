import React, { useContext } from "react";
import "./Underline.scss";
import themeContext from "../../context/themeContext";
export default function Underline({ children }) {
  const { theme } = useContext(themeContext);
  return (
    <span
      className={`underline ${
        theme.name === "light" ? "underline-light" : "underline-dark"
      }`}
    >
      {children}
    </span>
  );
}
