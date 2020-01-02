import React from "react";
import "./Hello.scss";
import { Link } from "react-router-dom";
import Underline from "../Underline/Underline";
import LazyImg from "../../components/LazyImage/LazyImg";
export default function Hello() {
  return (
    <header className="hello-section">
      <LazyImg
        high="https://raw.githubusercontent.com/amariner/portfolio/master/images/andreu.jpg"
        low="https://raw.githubusercontent.com/amariner/portfolio/master/images/andreu.jpg"
      />

      <p>
        <b>Andreu Mariner.</b>
        <br />I design and code user interfaces with React, Vue and JavaScript
        in Castellò.{" "}
        <Link to="/about" className="underline-focus">
          <Underline>Roadmap!</Underline>
        </Link>
      </p>
    </header>
  );
}
