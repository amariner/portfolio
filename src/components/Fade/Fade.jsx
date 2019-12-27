import React from "react";
import "./Fade.scss";

export default function Fade({ children, delay }) {
  return (
    <div
      className="element-fade"
      style={{ animation: `elementFade 300ms ease-out ${delay}ms 1 forwards` }}
    >
      {children}
    </div>
  );
}
