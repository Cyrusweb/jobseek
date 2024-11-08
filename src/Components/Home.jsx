import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo";
import About from "../Components/About";
import JobList from "../Components/JobList";
import HowThose from "./HowThose";
import DisCover from "./DisCover";
// DisCover
// HowThose
function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatWeDo />
      <div>
        <About />
        <JobList />
        <HowThose />
        <DisCover />
      </div>
    </>
  );
}

export default Home;
