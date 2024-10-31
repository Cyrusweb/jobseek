import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo";
import About from "../Components/About";
import JobList from "../Components/JobList";
import HowThose from "./HowThose";
// HowThose
function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatWeDo />
      <main className="flex justify-center items-center">
        <div>
          <About />
          <JobList />
          <HowThose />
        </div>
      </main>
    </>
  );
}

export default Home;
