import "./Intro.css";
import Photo from "../Photo/Photo";
import photoHeadshot from "../../data/images/daisy/daisy-headshot.jpg";

export default function Intro({ intro }) {
  const photoWidth = 300;
  const photoHeight = 200;
  const photoAngle = -10;

  return (
    <>
      <article id="intro">
        <Photo
          width={photoWidth}
          height={photoHeight}
          angle={photoAngle}
          top={"-70px"}
          left={"-30px"}
          image={photoHeadshot}
        />
        <div className="flex">
          <div className="photo-spacer" style={{ minWidth: photoWidth }}></div>
          <div>
            <h1>Introducing Daisy Yeager</h1>
            <p>{intro}</p>
          </div>
        </div>
      </article>
    </>
  );
}
