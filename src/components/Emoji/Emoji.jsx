import React from "react";
export default function Emoji({ children, alt }) {
  return (
    <span role="img" aria-label={alt} aria-hidden={alt ? "false" : "true"}>
      {children}
    </span>
  );
}
