import React from "react";
import Hello from "../components/Hello/Hello";
import ProjectsContainer from "../containers/ProjectsContainer";
import Contact from "../components/Contact/Contact";
import Copyrights from "../components/Copyrights/Copyrights";
export default function Home() {
  return (
    <section className="view">
      <Hello />
      <Contact />
      <Copyrights />
    </section>
  );
}
