import React, { useEffect, useState, useContext } from "react";
import themeContext from "../context/themeContext";
import Emoji from "../components/Emoji/Emoji";
import Article from "../components/Article/Article";
import "../scss/About.scss";
export default function About() {
  const { theme } = useContext(themeContext);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const highlights = document.querySelectorAll(".experienced");

    const addHover = e => {
      setModalVisible(true);
      highlights.forEach(span => {
        span.classList.add("experienced-hover");
      });
    };
    const removeHover = e => {
      setModalVisible(false);
      highlights.forEach(span => {
        span.classList.remove("experienced-hover");
      });
    };
    highlights.forEach(span => {
      span.addEventListener("mouseenter", addHover);
      span.addEventListener("mouseleave", removeHover);
    });

    return () => {
      highlights.forEach(span => {
        span.removeEventListener("mouseenter", addHover);
        span.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <Article>
      <h2 className="about-me-header">
        Get to know me <Emoji />
      </h2>
      <p>
        My name is Andreu Mariner. I'm a 28 years old self taught front-end dev.
        I design and build web apps with React, Vue and JavaScript. Currently{" "}
        <span
          className={
            theme.name === "light" ? "highlight" : "highlight highlight-dark"
          }
        >
          I am currently Senior Front-End developer position in Castelló.
        </span>{" "}
        In the meantime I spend most of my time doing all kinds of creative
        stuff. By day I draw, compose music and work on achieving a black belt
        in JavaScript. By night I cruise the city on my skateboard and dip my
        toes in back-end technologies, like Express and MongoDB.
      </p>
      <section
        className={
          theme.name === "light"
            ? "skills-section skills-section-light"
            : "skills-section"
        }
      >
        <div className="column-left">Exp</div>
        <div className="column-right experience-column">
          Senior Front-End developer <br />
          Porcelanosa Group
          <br />
          June 20012 - May 2019
        </div>
        <div className="column-left">Skills</div>
        <div className="column-right">
          <ul className="technologies-list">
            <li>English</li>
            <li>
              <span className="experienced">HTML</span>
            </li>
            <li>
              <span className="experienced">CSS</span>
            </li>
            <li>
              <span className="experienced">JavaScript</span>
            </li>
            <li>
              <span className="experienced">Vue</span>, Nuxt.js
            </li>
            <li>React, Redux</li>
            <li>
              <span className="experienced">Bootstrap</span>
            </li>
            <li>
              <span className="experienced">jQuery</span>
            </li>
            <li>GraphQL, Apollo</li>
            <li>Firebase</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="column-left">Tools</div>
        <div className="column-right">
          <ul className="technologies-list">
            <li>
              <span className="experienced">Git</span>
            </li>
            <li>
              <span className="experienced">Bitbucket</span>
            </li>
            <li>
              <span className="experienced">Sass</span>
            </li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>
              <span className="experienced">VS Code</span>
            </li>
            <li>Photoshop</li>
            <li>
              <span className="experienced">Sketch</span>
            </li>
          </ul>
        </div>
        <div className="column-left">Learning</div>
        <div className="column-right">
          <ul className="technologies-list">
            <li>TypeScript</li>
            <li>Testing</li>
            <li>Node, Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </section>
      <div
        className={
          theme.name === "light" ? "skills-modal modal-light" : "skills-modal"
        }
        style={{
          opacity: modalVisible ? "1" : "0",
          transform: modalVisible ? "translateY(0)" : "translateY(10px)"
        }}
      >
        I have commercial experience with these technologies{" "}
      </div>
      <div className="mobile-info" style={{ color: theme.grey }}>
        I have commercial experience with highlighted technologies{" "}
      </div>
    </Article>
  );
}
