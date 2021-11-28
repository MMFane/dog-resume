import "./App.css";
import { intro, details } from "./data/intro";
import { tricks, trickCount } from "./data/tricks";
import { likes, dislikes } from "./data/like-dislikes";
import Intro from "./components/Intro/Intro";
import Photo from "./components/Photo/Photo";
import TrickList from "./components/TrickList/TrickList";

import photoHouseOfRuff from "./data/images/daisy/daisy-house-of-ruff.jpg";

export default function App() {
  const photoWidth = 240;
  return (
    <div id="resume">
      <header className="pattern"></header>
      <section className="body">
        <Intro intro={intro} details={details} />
        <article>
          <h2>Tricks ({trickCount})</h2>
          <div className="article-body">
            <TrickList lists={tricks} />
          </div>
        </article>
        <article>
          <h2>Likes and Dislikes</h2>
          <div className="article-body">
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
        </article>
        <article>
          <h2>Play Style</h2>
          <div className="article-body">
            <p>
              I'm a total tank and love running into other dogs and people. My
              favorite games are wrestling, chase, trading hip bumps, and
              "bulldozer." I love mouthing all over other dogs' necks, cheeks,
              and legs. I'm pretty rough, but know how to self-handicap when I'm
              playing with some gentler or smaller dogs I like.
            </p>
          </div>
        </article>
        <article>
          <Photo
            width={photoWidth}
            height={320}
            angle={5}
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
                  Scooters, skateboards, hoverboards, and bikes can really
                  bother me, especially when they surprise me. I need distance
                  from them when possible and lots of praise when I don't react!
                </li>
                <li>
                  I often jump on people when I'm excited. I'm working on
                  keeping four on the floor. It helps when folks kneel down to
                  pet me to reinforce that's where I should be.
                </li>
                <li>
                  I still sometimes like to fight the vaccuum. What can I say?
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
      <footer className="pattern"></footer>
    </div>
  );
}
