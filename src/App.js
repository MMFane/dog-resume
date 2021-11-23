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
          <TrickList title="Utility Tricks" tricks={tricks.utility} />
        </article>
        <article>
          Fun Tricks
          <TrickList title="Party Tricks" tricks={tricks.party} />
        </article>
      </section>
    </div>
  );
}
