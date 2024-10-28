import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo";
import About from "./Components/About";
import JobList from "./Components/JobList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Abouto;
// JobList
function App() {
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

export default App;
