import reactLogo from "@assets/images/react.svg";
import "@assets/styles/about.less";
import React from "react";

const About = () => (
  <article id="about" className="page-wrapper hor-center theme-back">
    <img src={reactLogo} className="logo" alt="logo" />
    <h1> Welcome Octopus Console</h1>
  </article>
);

export default About;
