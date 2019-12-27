import React, { useState, useContext, useRef } from "react";
import "./Search.scss";
import { SearchIcon, CloseIcon } from "../icons/Icons";
import Icon from "./../icons/Icon";
import themeContext from "../../context/themeContext";

export default function Search({ input, handleInput }) {
  const [typing, setTyping] = useState(false);
  const { theme } = useContext(themeContext);
  const inputRef = useRef();
  const iconClick = () => {
    if (typing || input) {
      handleInput("");
      setTyping(false);
      inputRef.current.blur();
    } else {
      setTyping(true);
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={`search-wrapper ${
        theme.name === "light" ? "search-wrapper-light" : "search-wrapper-dark"
      }`}
    >
      <div
        className="search-input-wrapper"
        style={{
          width: typing ? "200px" : "100px",
          borderBottomLeftRadius: input ? "0" : "3px",
          borderBottomRightRadius: input ? "0" : "3px"
        }}
      >
        <input
          type="text"
          className="search-input"
          placeholder={typing ? "e.g. React" : "Search"}
          style={{ width: !typing ? "80px" : "180px" }}
          autoComplete="off"
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
          value={input}
          ref={inputRef}
          onChange={e => handleInput(e.target.value)}
        />
        <div
          onClick={iconClick}
          tabIndex="0"
          role="button"
          onKeyDown={e => {
            if (e.keyCode === 13) {
              iconClick();
            }
          }}
        >
          <Icon size="14">
            {typing || input ? <CloseIcon /> : <SearchIcon />}
          </Icon>
        </div>
      </div>
    </div>
  );
}
