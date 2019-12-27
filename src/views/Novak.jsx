import React from "react";
import Article from "../components/Article/Article";
import { WordpressIcon } from "../components/icons/Technologies";
import LazyImg from "../components/LazyImage/LazyImg";
import Underline from "../components/Underline/Underline";
import BadgesContainer from "../containers/BadgesContainer";
export default function Novak() {
  return (
    <Article>
      <LazyImg
        low="https://kajetaniak.pl/images/novak/main-low.png"
        high="https://kajetaniak.pl/images/novak/main.png"
      />
      <header>
        <h1>Novak Contractors</h1>
        <a
          href="http://www.novakcontractors.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Underline>Live</Underline>
        </a>
        <p>Renovation and slight redesign of Wordpress website.</p>
        <BadgesContainer>
          <span className="technology-badge wordpress">
            <WordpressIcon />
            WordPress
          </span>
        </BadgesContainer>
      </header>
      <h2>About the project</h2>
      <p>
        This was my first commercial project as a freelancer. I had to fix a
        bunch of bugs left by previous developer. I also added some new features
        and slightly changed up the design. The site is built on Wordpress which
        let me learn how Wordpress websites work. I also learned the file
        structure and how to make changes not only with CMS by also by directly
        modifying files.
      </p>
    </Article>
  );
}
