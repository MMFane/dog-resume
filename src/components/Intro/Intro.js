import "./Intro.css";
import Headshot from "../Photo/Headshot";

export default function Intro({ intro }) {
  return (
    <>
      <article id="intro">
        <Headshot />
        <div id="intro-text">
          <div id="spacer"></div>
          <div>
            <h1>Introducing Daisy Yeager</h1>
            <p>{intro}</p>
          </div>
        </div>
      </article>
    </>
  );
}
