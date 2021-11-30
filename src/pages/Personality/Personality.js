import { likes, dislikes } from "../../data/like-dislikes";
import Photo from "../../components/Photo/Photo";
import photoHouseOfRuff from "../../data/images/daisy/daisy-house-of-ruff.jpg";
import photoBandana from "../../data/images/daisy/daisy-proper.jpg";

export default function Personality() {
  const photo1Width = 240;
  const photo1Height = 320;
  const photo2Width = 375;
  const photo2Height = 250;
  const photo1Angle = -15;
  const photo2Angle = 10;

  return (
    <>
      <article>
        <Photo
          width={photo2Width}
          height={photo2Height}
          angle={photo2Angle}
          top={"-20px"}
          right={"20px"}
          image={photoBandana}
          clipTop={"-25px"}
          clipRight={"100px"}
          clipAngle={5}
        />
        <h2>Likes and Dislikes</h2>
        <div className="article-body">
          <div className="flex">
            <div>
              <h3>Likes</h3>
              <ul>
                {likes.map((like, index) => {
                  return <li key={`like-${index}`}>{like}</li>;
                })}
              </ul>
              <h3>Dislikes</h3>
              <ul>
                {dislikes.map((dislike, index) => {
                  return <li key={`dislike-${index}`}>{dislike}</li>;
                })}
              </ul>
            </div>
            <div
              className="photo-spacer"
              style={{ minWidth: photo2Width * 1.1 }}
            ></div>
          </div>
        </div>
      </article>
      <article>
        <h2>Play Style</h2>
        <div className="article-body">
          <p>
            I'm a total tank and love running into other dogs and people. I love
            mouthing all over other dogs' necks, cheeks, and legs. I'm pretty
            rough, but know how to self-handicap when I'm playing with gentler
            or smaller dogs I like.
          </p>
          <p>
            I couldn't care less about fetch. I may chase a ball until I realize
            it isn't prey, or chase the dog chasing the ball instead. I do like
            to play tug with humans and toys, and love, love, love running after
            my flirt pole in the park.
          </p>
          <p>My favorite games are </p>
          <ul>
            <li>wrestling</li>
            <li>mouth jousting</li>
            <li>trading hip bumps</li>
            <li>chase</li>
            <li>"bulldozer"</li>
          </ul>
        </div>
      </article>
      <article>
        <Photo
          width={photo1Width}
          height={photo1Height}
          angle={photo1Angle}
          top={"-80px"}
          right={"-25px"}
          image={photoHouseOfRuff}
          clipAngle={50}
          clipTop={"75px"}
          clipRight={"5px"}
        />
        <h2>Things I'm Working On</h2>
        <div className="flex">
          <div className="article-body">
            <ul>
              <li>
                I'm an avid counter surfer. My parents are trying to teach me
                better boundaries, but snagging food is pretty rewarding, so
                it's been hard to learn.
              </li>
              <li>
                I often jump on people when I'm excited. I'm working on keeping
                four on the floor. It helps when folks kneel down to pet me to
                reinforce that's where I should be.
              </li>
              <li>
                Scooters, skateboards, hoverboards, and bikes can really bother
                me, especially when they surprise me. I need distance from them
                when possible and lots of praise when I don't react!
              </li>
              <li>
                I still sometimes like to fight the vaccuum. What can I say?
              </li>
            </ul>
          </div>
          <div className="photo-spacer" style={{ minWidth: photo1Width }}></div>
        </div>
      </article>
    </>
  );
}
