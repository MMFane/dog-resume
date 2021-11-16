import "./App.css";
import { intro, tricks } from "./data/mockup";
import Intro from "./components/Intro/Intro";
import TrickList from "./components/TrickList/TrickList";

export default function App() {
  return (
    <div id="resume">
      <header>
        <nav>Navigation</nav>
      </header>
      <section className="body">
        <Intro intro={intro} />
        <article>
          Utility Tricks
          <TrickList />
        </article>
        <article>
          Fun Tricks
          <TrickList />
        </article>
      </section>
    </div>
  );
}
