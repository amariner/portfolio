import React, { useState } from "react";
import "./Project.scss";
import { Link } from "react-router-dom";
export default function Project({
  title,
  url,
  isLarge,
  description,
  background,
  children
}) {
  const [projectLoaded, setProjectLoaded] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  return (
    <div className={isLarge ? "project project-large" : "project"}>
      <Link
        to={url}
        className={highlighted ? "highlighted" : ""}
        onTouchStart={() => setHighlighted(true)}
        onTouchEnd={() => setHighlighted(false)}
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
      >
        <div
          className={
            projectLoaded ? "project-content loaded" : "project-content"
          }
        >
          <div className="project-image-container">
            <img
              src={background}
              alt={title}
              style={{ opacity: projectLoaded ? "1" : "0" }}
              onLoad={() => setProjectLoaded(true)}
              className="project-image"
            />
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="icons-container">{children}</div>
        </div>
      </Link>
    </div>
  );
}
