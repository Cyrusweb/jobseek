import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo";
import About from "../Components/About";
import JobList from "../Components/JobList";
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
        </div>
      </main>
    </>
  );
}

export default Home;
