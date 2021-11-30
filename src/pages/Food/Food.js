import { Link } from "react-router-dom";
import Photo from "../../components/Photo/Photo";
import photo from "../../data/images/daisy/daisy-diet.jpg";

export default function Food() {
  const photoWidth = 330;
  const photoHeight = 220;
  const photoAngle = 7;
  return (
    <div>
      <article>
        <Photo
          width={photoWidth}
          height={photoHeight}
          angle={photoAngle}
          top={"-30px"}
          right={0}
          image={photo}
          clipTop={"-50px"}
          clipRight={"270px"}
          clipAngle={69}
        />
        <h2>Diet & Medicine</h2>
        <div className="flex">
          <div className="article-body">
            <h3>Morning (~6-9am)</h3>
            <ul>
              <li>
                <a href="https://www.chewy.com/annamaet-grain-free-manitok-red-meat/dp/242469">
                  3/4 c Annamaet Manitok (Lamb & Lentils)
                </a>
              </li>
              <li>
                <a href="https://www.chewy.com/nutri-vet-pre-probiotics-soft-chews/dp/132163">
                  2x prebiotic chews
                </a>
              </li>
              <li>1 fish oil pill</li>
              <li>1 blue anti-anxiety pill</li>
            </ul>
            <h3>Evening (~5-8pm)</h3>
            <ul>
              <li>
                <a href="https://www.chewy.com/annamaet-grain-free-manitok-red-meat/dp/242469">
                  3/4 c Annamaet Manitok Lamb & Lentils
                </a>
              </li>
              <li>
                <a href="https://www.chewy.com/nutri-vet-pre-probiotics-soft-chews/dp/132163">
                  2x prebiotic chews
                </a>
              </li>
              <li>
                <a href="https://www.chewy.com/greenies-large-dental-dog-treats/dp/35506">
                  1 greenie (L)
                </a>
              </li>
            </ul>
          </div>
          <div className="photo-spacer" style={{ minWidth: photoWidth }}></div>
        </div>
      </article>
      <article>
        <h2>Allergies</h2>
        <div className="article-body">
          <ul>
            <li>
              <b>Wheat</b> - I get hives when I eat too much bread
            </li>
          </ul>
        </div>
      </article>
      <article>
        <h2>Notes</h2>
        <div className="article-body">
          <p>
            My poos are almost always a little yellow/orange and soft. If you
            dog-sit me, don't be alarmed at a diarrhea or two, but please do
            <Link to="/emergency"> call the vet</Link> if it continues more than
            a couple days.
          </p>
          <p>
            I like to eat grass. My humans are cool with this, but please be
            careful to watch me so I don't snarf up a hidden chicken bone.
          </p>
        </div>
      </article>
    </div>
  );
}
