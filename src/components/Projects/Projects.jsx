import React from "react";
import Project from "./../Project/Project";
export default function Projects({ projects }) {
  return (
    <>
      {projects.map(project => {
        return (
          <Project
            key={project.title}
            title={project.title}
            background={project.background ? project.background : ""}
            description={project.description}
            url={project.url}
            tags={project.tags}
            isLarge={project.largeElement}
            children={project.icons}
          />
        );
      })}
    </>
  );
}
