import "./Intro.css";
import Photo from "../Photo/Photo";
import photoHeadshot from "../../data/images/daisy/daisy-headshot.jpg";

export default function Intro({ intro, details, breeds }) {
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
          top={"50px"}
          left={"-50px"}
          image={photoHeadshot}
          clipTop={"67px"}
          clipLeft={"2px"}
          clipAngle={-25}
        />
        <h1>Introducing Daisy Yeager</h1>
        <div className="flex">
          <div className="photo-spacer" style={{ minWidth: photoWidth }}></div>
          <div className="article-body">
            <p>{intro}</p>
            <table>
              {Object.entries(details).map((detail, index) => {
                return (
                  <tr key={`detail-${index}`}>
                    <td className="label">{detail[0]}</td>
                    <td className="content">{detail[1]}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </article>
    </>
  );
}
