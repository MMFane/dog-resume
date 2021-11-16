import "./Intro.css";
import Headshot from "../Photo/Headshot";

export default function Intro({ intro }) {
  return (
    <>
      <article id="intro">
        <h1>Introducing Daisy Yeager</h1>
        <Headshot />
        <p>{intro}</p>
      </article>
    </>
  );
}
