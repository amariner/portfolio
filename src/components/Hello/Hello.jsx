import React from "react";
import "./Hello.scss";
import { Link } from "react-router-dom";
import Underline from "../Underline/Underline";
export default function Hello() {
  return (
    <header className="hello-section">
      <Img
        src="https://soythe.best/static/media/andreu.22fa1613.jpg" // 3rd-party image url
      />
      <p>
        <b>Andreu Mariner.</b>
        <br />I design and code user interfaces with React, Vue and JavaScript
        in Warsaw.{" "}
        <Link to="/about" className="underline-focus">
          <Underline>Get to know me!</Underline>
        </Link>
      </p>
    </header>
  );
}
