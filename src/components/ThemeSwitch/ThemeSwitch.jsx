import React, { useContext, useRef } from "react";
import Icon from "./../icons/Icon";
import "./ThemeSwitch.scss";
import { SunIcon, MoonIcon } from "./../icons/Icons";
import themeContext from "../../context/themeContext";

export default function ThemeSwitch() {
  const switchRef = useRef();
  const { theme, setTheme } = useContext(themeContext);
  const light = {
    name: "light",
    background: "white",
    color: "black",
    highlight: "#8ed6ff",
    grey: "#c5c5c5"
  };
  const dark = {
    name: "dark",
    background: "#212731",
    color: "white",
    highlight: "#ff9bc6",
    grey: "#434e61"
  };
  const switchTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };
  return (
    <>
      <div
        className={`theme-switch ${
          theme.name === "light" ? "theme-switch-light" : "theme-switch-dark"
        }`}
        onClick={() => {
          switchTheme();
          switchRef.current.blur();
        }}
        ref={switchRef}
        tabIndex="0"
        role="button"
        aria-label="switch color theme"
        onKeyDown={e => {
          if (e.keyCode === 13) {
            switchTheme();
          }
        }}
      >
        <Icon size="20">
          {theme.name === "light" ? <SunIcon /> : <MoonIcon />}
        </Icon>
      </div>
    </>
  );
}
