import "./App.css";
import { intro, tricks, trickCount } from "./data/tricks";
import { likes, dislikes } from "./data/like-dislikes";
import Intro from "./components/Intro/Intro";
import Photo from "./components/Photo/Photo";
import TrickList from "./components/TrickList/TrickList";

import photoHouseOfRuff from "./data/images/daisy/daisy-house-of-ruff.jpg";

export default function App() {
  const photoWidth = 240;
  return (
    <div id="resume">
      <header>
        <nav>Navigation</nav>
      </header>
      <section className="body">
        <Intro intro={intro} />
        <article>
          <h2>Tricks ({trickCount})</h2>
          <TrickList lists={tricks} />
        </article>
        <article>
          <h2>Likes and Dislikes</h2>
          <h3>Likes</h3>
          <ul>
            {likes.map((like) => {
              return <li>{like}</li>;
            })}
          </ul>
          <h3>Dislikes</h3>
          <ul>
            {dislikes.map((like) => {
              return <li>{like}</li>;
            })}
          </ul>
        </article>
        <article>
          <Photo
            width={photoWidth}
            height={320}
            angle={5}
            top={"-50px"}
            right={"-25px"}
            image={photoHouseOfRuff}
          />

          <div className="flex">
            <div>
              <h2>Things I'm Working On</h2>
              <ul>
                <li>
                  Scooters, skateboards, hoverboards, and bikes can really
                  bother me, especially when they surprise me or fly by very
                  close. I need to get some distance from them when possible and
                  lots of praise when I don't react!
                </li>
                <li>
                  I often jump on people when I'm excited. We're working on
                  telling me to "keep four on the floor" and I could use lots of
                  positive feedback when I succeed. It often works to have me a
                  little distant when people greet me and to have folks kneel
                  down and pet me on the ground to reinforce that's where I
                  should be.
                </li>
                <li>
                  I'm a lot better than I used to be, but I sometimes still like
                  to fight the vaccuum. It helps to have someone other than the
                  vacuum-er keep me a little distant and give me treats, praise,
                  and play while the vacuum is running.
                </li>
              </ul>
            </div>
            <div
              className="photo-spacer"
              style={{ minWidth: photoWidth }}
            ></div>
          </div>
        </article>
      </section>
    </div>
  );
}
