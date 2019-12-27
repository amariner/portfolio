import React, { useState, useContext } from "react";
import Projects from "./../components/Projects/Projects";
import Search from "./../components/Search/Search";
import themeContext from "./../context/themeContext";
import {
  VueIcon,
  ReactIcon,
  BootstrapIcon,
  GraphQLIcon,
  NuxtIcon,
  SassIcon,
  JavaScriptIcon,
  ReduxIcon,
  WordpressIcon,
  FirebaseIcon
} from "../components/icons/Technologies";
import "./ProjectsContainer.scss";

export default function ProjectsContainer() {
  const { theme } = useContext(themeContext);
  const initialProjects = [
    {
      title: "Vaiap",
      background: "https://kajetaniak.pl/images/vaiap/project.png",
      url: "/vaiap",
      description: "My first job as a Junior Front-End developer.",
      largeElement: true,
      tags: ["vue", "bootstrap", "sass"],
      icons: [
        <VueIcon key="vue" />,
        <BootstrapIcon key="bootstrap" />,
        <SassIcon key="sass" />
      ]
    },
    {
      title: "Dziecimamy",
      background: "https://kajetaniak.pl/images/dziecimamy/project.png",
      url: "/dziecimamy",
      description:
        "SEO friendly single page application blog written with Vue.js.",
      largeElement: true,
      tags: ["vue", "nuxt", "graphql", "sass"],
      icons: [
        <VueIcon key="vue" />,
        <NuxtIcon key="nuxt" />,
        <GraphQLIcon key="graphql" />,
        <SassIcon key="sass" />
      ]
    },
    {
      title: "My website",
      background: "https://kajetaniak.pl/images/mywebsite/project.png",
      url: "/mywebsite",
      description: "My personal website written with React",
      largeElement: false,
      tags: ["react", "sass"],
      icons: [<ReactIcon key="react" />, <SassIcon key="sass" />]
    },
    {
      title: "Youtube playlist",
      background: "https://kajetaniak.pl/images/playlist/project.png",
      url: "/playlist",
      description:
        "Simple app for creating a playlist for youtube videos with custom player.",
      largeElement: false,
      tags: ["react", "redux", "sass", "firebase"],
      icons: [
        <ReactIcon key="react" />,
        <ReduxIcon key="redux" />,
        <FirebaseIcon key="firebase" />,
        <SassIcon key="sass" />
      ]
    },
    {
      title: "My old website",
      background: "https://kajetaniak.pl/images/oldwebsite/project.png",
      url: "/oldwebsite",
      description: "My old portfolio website written with vanilla JS.",
      largeElement: false,
      tags: ["javascript", "javas cript", "sass"],
      icons: [<JavaScriptIcon key="javascript" />, <SassIcon key="sass" />]
    },
    {
      title: "Novak Contractors",
      background: "https://kajetaniak.pl/images/novak/project.png",
      url: "/novak",
      description: "Wordpress website renovation.",
      largeElement: false,
      tags: ["wordpress"],
      icons: [<WordpressIcon key="wordpress" />]
    }
  ];

  const [projects] = useState(initialProjects);
  const [searchPhrase, setSearchPhrase] = useState("");

  const searchFilter = project => {
    if (!searchPhrase) {
      return true;
    } else {
      return project.tags.filter(tag =>
        tag.includes(searchPhrase.toLowerCase())
      ).length;
    }
  };
  return (
    <section
      className={`projects-section ${
        theme.name === "light" ? "projects-light" : "projects-dark"
      }`}
    >
      <div className="work-header">
        <h1>Work</h1>
      </div>
      <Search input={searchPhrase} handleInput={setSearchPhrase} />
      <div className="large-projects-container">
        <Projects
          projects={projects
            .filter(project => project.largeElement)
            .filter(searchFilter)}
        />
      </div>
      <div className="projects-container">
        <Projects
          projects={projects
            .filter(project => !project.largeElement)
            .filter(searchFilter)}
        />
      </div>
      <div className="clearfix" />
    </section>
  );
}
