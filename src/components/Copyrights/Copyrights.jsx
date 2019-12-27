import React, { useContext } from "react";
import "./Copyrights.scss";
import themeContext from "../../context/themeContext";

export default function Copyrights() {
  const { theme } = useContext(themeContext);
  const year = new Date().getFullYear();
  return (
    <footer className="copyrights" style={{ color: theme.grey }}>
      <span className="copyright-sign">©</span> {year} Andreu Mariner
    </footer>
  );
}
