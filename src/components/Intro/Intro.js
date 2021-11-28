import "./Intro.css";
import Photo from "../Photo/Photo";
import photoHeadshot from "../../data/images/daisy/daisy-headshot.jpg";

export default function Intro({ intro, details }) {
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
          top={"70px"}
          left={"-50px"}
          image={photoHeadshot}
          clipTop={"86px"}
          clipLeft={"2px"}
          clipAngle={-25}
        />
        <h1>Introducing Daisy Yeager</h1>
        <div className="flex">
          <div className="photo-spacer" style={{ minWidth: photoWidth }}></div>
          <div className="article-body">
            <p>{intro}</p>
            <ul>
              {Object.entries(details).map((detail, index) => {
                return (
                  <li key={`detail-${index}`}>
                    <span className="label">{detail[0]}</span>{" "}
                    <span>{detail[1]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
