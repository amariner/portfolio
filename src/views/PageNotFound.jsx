import React from "react";
import "../scss/PageNotFound.scss";
export default function PageNotFound() {
  return (
    <section className="view not-found">
      Oops, we couldn't find that page <br />
      <a
        href="https://www.kajetaniak.pl/"
        className="underline underline-light"
      >
        Back to home
      </a>
    </section>
  );
}
