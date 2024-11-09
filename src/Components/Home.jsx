import React from "react";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import WhatWeDo from "./pages/WhatWeDo";
import About from "./pages/About";
import JobList from "./pages/JobList";
import HowThose from "./pages/HowThose";
import DisCover from "./pages/DisCover";
import JobOpening from "./pages/JobOpening";
import FooterHero from "./pages/FooterHero";
// FooterHero
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
        <div className="m-3 md:mx-8">
          <JobOpening />
        </div>
        <div className="m-3 md:mx-8">
          <FooterHero />
        </div>
      </div>
    </>
  );
}

export default Home;
