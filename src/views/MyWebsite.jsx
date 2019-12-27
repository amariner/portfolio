import React from "react";
import Article from "../components/Article/Article";
import { ReactIcon, SassIcon } from "../components/icons/Technologies";
import LazyImg from "../components/LazyImage/LazyImg";
import BadgesContainer from "../containers/BadgesContainer";
import Underline from "../components/Underline/Underline";
export default function MyWebsite() {
  return (
    <Article>
      <LazyImg
        high="https://kajetaniak.pl/images/mywebsite/main.png"
        low="https://kajetaniak.pl/images/mywebsite/main-low.png"
      />
      <header>
        <h1>My website</h1>
        <a
          href="https://github.com/FilipKajetaniak/new-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Github</Underline>
        </a>
        <p>Simple portfolio website built with React.</p>
        <BadgesContainer>
          <span className="technology-badge react">
            <ReactIcon />
            React
          </span>
          <span className="technology-badge sass">
            <SassIcon />
            Sass
          </span>
        </BadgesContainer>
      </header>
      <h2>About the project</h2>
      <p>
        This is my most recent project so far. I wanted to a new portfolio
        website because I slowly started to dislike my previous one. I aimed for
        a super modest, clean and readable design. I wrote it with React since
        it's perfect for this case and it's my new favorite thing right now.
      </p>
    </Article>
  );
}
