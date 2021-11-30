import "./App.css";
import { intro, details, breeds } from "./data/intro";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Tricks from "./pages/Tricks/Tricks";
import Food from "./pages/Food/Food";
import Personality from "./pages/Personality/Personality";
import Breeds from "./pages/Breeds/Breeds";
import Emergency from "./pages/Emergency/Emergency";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div id="resume">
      <header className="pattern"></header>
      <section className="body">
        <Intro intro={intro} details={details} breeds={breeds} />
        <Nav />
        <Routes>
          <Route path="/" element={<Tricks />} exact />
          <Route path="/food" element={<Food />} exact />
          <Route path="/personality" element={<Personality />} exact />
          <Route path="/breeds" element={<Breeds />} exact />
          <Route path="/emergency" element={<Emergency />} exact />
        </Routes>
      </section>
      <footer className="pattern"></footer>
    </div>
  );
}
