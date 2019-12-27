import React from "react";
import Icon from "../icons/Icon";
import { ArrowLeft } from "../icons/Icons";
import { Link } from "react-router-dom";
import "./HomeButton.scss";
export default function HomeButton() {
  return (
    <Link to="/" className="home-button" aria-label="back to home">
      <Icon size={30}>
        <ArrowLeft />
      </Icon>
    </Link>
  );
}
