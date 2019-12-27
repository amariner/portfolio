import React from "react";
import Underline from "../Underline/Underline";
import Emoji from "../Emoji/Emoji";
import "./Contact.scss";
export default function Contact() {
  return (
    <section className="contact">
      <p>
        <b>
          Say hello! <Emoji alt="hello">🥋</Emoji>
        </b>
        <br />
        Thanks for stopping by!
        <br />
        I'd be happy to help you out!
        <br />
        <a href="mailto:hello@kajetaniak.pl" className="underline-focus">
          <Underline>hi@andreu.io</Underline>
        </a>
      </p>
    </section>
  );
}
