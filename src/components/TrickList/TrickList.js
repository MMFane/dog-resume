import "./TrickList.css";
import PauseableGif from "../PauseableGif/PauseableGif";

export default function TrickList({ title, tricks }) {
  console.log(tricks);
  console.log(title);
  return (
    <section className="trick-list">
      <ul>
        <h2>{title}</h2>
        {tricks.map((trick, index) => {
          return (
            <li key={`trick-${index}`}>
              <div>
                <h3>{trick.cue}</h3>
                <p>{trick.description}</p>
                <p>{trick.handSignal}</p>
                <img src={trick.handSignalImg} alt="" />
                <PauseableGif video={trick.video} slate={trick.slate} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
