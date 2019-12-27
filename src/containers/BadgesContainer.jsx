import React, { useContext } from "react";
import themeContext from "../context/themeContext";
import "./BadgesContainer.scss";
export default function BadgesContainer({ children }) {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={
        theme.name === "light"
          ? "badges-container badges-light"
          : "badges-container badges-dark"
      }
    >
      {children}
    </div>
  );
}
