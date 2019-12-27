import React, { useState, useContext } from "react";
import "./LazyImg.scss";
import themeContext from "../../context/themeContext";
export default function LazyImg({ low, high, alt }) {
  const { theme } = useContext(themeContext);
  const [highImgOpacity, setHighImgOpacity] = useState(0);
  return (
    <div
      className={
        theme.name === "light"
          ? "img-wrapper img-light"
          : "img-wrapper img-dark"
      }
    >
      <div
        className="blurred-background"
        style={{
          backgroundImage: `url('${low}')`
        }}
      />
      <img
        src={high}
        alt={alt}
        title={alt}
        onLoad={() => setHighImgOpacity(1)}
        className="high-background"
        style={{
          opacity: highImgOpacity
        }}
      />
    </div>
  );
}
