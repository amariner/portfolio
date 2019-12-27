import React from "react";
import Underline from "../Underline/Underline";
import "./Contact.scss";
export default function Contact() {
  return (
    <section className="contact">
      <p>
        <b>Say hello!</b>
        <br />
        Thanks for stopping by!
        <br />
        I'd be happy to help you out!
        <br />
        <a href="mailto:hi@andreu.io" className="underline-focus">
          <Underline>hi@andreu.io</Underline>
        </a>
      </p>
    </section>
  );
}
