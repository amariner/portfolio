import React from "react";
import Article from "../components/Article/Article";
import LazyImg from "../components/LazyImage/LazyImg";
import BadgesContainer from "../containers/BadgesContainer";
import Underline from "../components/Underline/Underline";
import {
  ReduxIcon,
  ReactIcon,
  FirebaseIcon,
  SassIcon
} from "../components/icons/Technologies";
export default function Playlist() {
  return (
    <Article>
      <LazyImg
        low="https://kajetaniak.pl/images/playlist/main-low.png"
        high="https://kajetaniak.pl/images/playlist/main.png"
        alt="youtube playlist"
      />
      <header>
        <h1>YouTube playlist</h1>
        <a
          href="https://kajetaniak.pl/playlist/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Live</Underline>
        </a>
        <a
          href="https://github.com/FilipKajetaniak/youtube-playlist"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Github</Underline>
        </a>
        <p>
          Simple app that lets you create and manage a playlist of playable
          YouTube videos.
        </p>
        <BadgesContainer>
          <span className="technology-badge react">
            <ReactIcon />
            React
          </span>
          <span className="technology-badge redux">
            <ReduxIcon />
            Redux
          </span>
          <span className="technology-badge firebase">
            <FirebaseIcon />
            Firebase
          </span>
          <span className="technology-badge sass">
            <SassIcon />
            Sass
          </span>
        </BadgesContainer>
      </header>
      <h2>About the project</h2>
      <p>
        I always felt a need for an app that lets you and your friends easly
        create a playlist of music together. So I decided to make one since I
        was trying to learn React and Redux. It turned out pretty much how I
        planned. Everyone can add, delete and change the order of tracks on the
        playlist in real life. The app also comes with custom player that lets
        you play, pause and rewind music. To add a track all you need to do is
        just paste a link to a video. The rest of the informations are fetched
        automatically from YouTube's API and then saved on a Firebase server.
        Regarding Redux, you might think that such state management tool is an
        overkill for project of that size. And I agree. Redux wasn't necessary
        here. I would achieve same functionality with less code and bundle size
        just by lifting state up or using context API. However I wanted to get
        to know Redux and learn how it works.
      </p>
      <LazyImg
        low="https://kajetaniak.pl/images/playlist/main-low.png"
        high="https://kajetaniak.pl/images/playlist/5ceea529cbf73511016292.gif"
        alt="youtube playlist demo"
      />
    </Article>
  );
}
