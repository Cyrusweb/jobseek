import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
// Nav

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
