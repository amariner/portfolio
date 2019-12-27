import React from "react";
import "./Article.scss";
import HomeButton from "../HomeButton/HomeButton";

export default function Article({ children }) {
  return (
    <article className="view article">
      {children}
      <HomeButton />
    </article>
  );
}
