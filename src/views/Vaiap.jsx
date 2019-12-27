import React from "react";
import Article from "../components/Article/Article";
import BadgesContainer from "../containers/BadgesContainer";
import {
  VueIcon,
  BootstrapIcon,
  SassIcon
} from "../components/icons/Technologies";
export default function Vaiap() {
  return (
    <Article>
      <header>
        <h1 className="vaiap-header">Vaiap</h1>
        <p>
          Unfortunatelly I can't talk much about this product since it's still
          hasn't been officially released. I've been working on it with the rest
          of the team as a Junior front-end developer since June 2018 untill May
          2019. I was responsible for writing user interfaces with Vue.
        </p>
        <BadgesContainer>
          <span className="technology-badge vue">
            <VueIcon />
            Vue
          </span>
          <span className="technology-badge bootstrap">
            <BootstrapIcon />
            Bootstrap
          </span>
          <span className="technology-badge sass">
            <SassIcon />
            Sass
          </span>
        </BadgesContainer>
      </header>
    </Article>
  );
}
