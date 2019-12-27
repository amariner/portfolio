import React from "react";
import Article from "../components/Article/Article";
import { JavaScriptIcon, SassIcon } from "../components/icons/Technologies";
import LazyImg from "../components/LazyImage/LazyImg";
import BadgesContainer from "../containers/BadgesContainer";
import Underline from "../components/Underline/Underline";
export default function OldWebsite() {
  return (
    <Article>
      <LazyImg
        low="https://kajetaniak.pl/images/oldwebsite/main-low.png"
        high="https://kajetaniak.pl/images/oldwebsite/main.png"
        alt="my old website"
      />
      <header>
        <h1>My old website</h1>
        <a
          href="https://kajetaniak.pl/oldwebsite/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Live</Underline>
        </a>
        <a
          href="https://github.com/FilipKajetaniak/mywebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Github</Underline>
        </a>
        <p>
          Super simple SPA website with hash based router written with vanilla
          JavaScript.
        </p>
        <BadgesContainer>
          <span className="technology-badge javascript">
            <JavaScriptIcon />
            JavaScript
          </span>
          <span className="technology-badge sass">
            <SassIcon />
            Sass
          </span>
        </BadgesContainer>
      </header>
      <h2>About the project</h2>
      <p>
        I built this website some time ago to show off my work and tell
        something about myself. I decided to go with super simple and modest
        design. The UI is simple, fast, and lightweight. I used pure JavaScript
        and wrote everything (except the scrolling function) from scratch.
      </p>
    </Article>
  );
}
