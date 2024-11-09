import React from "react";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import WhatWeDo from "./pages/WhatWeDo";
import About from "./pages/About";
import JobList from "./pages/JobList";
import HowThose from "./pages/HowThose";
import DisCover from "./pages/DisCover";
import JobOpening from "./pages/JobOpening";
// JobOpening
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
        <div className="mt-8">
          <JobOpening />
        </div>
      </div>
    </>
  );
}

export default Home;
