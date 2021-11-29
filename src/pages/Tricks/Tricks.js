import TrickList from "../../components/TrickList/TrickList";
import { tricks, trickCount } from "../../data/tricks";

export default function Tricks() {
  return (
    <article>
      <h2>Tricks ({trickCount})</h2>
      <div className="article-body">
        <TrickList lists={tricks} />
      </div>
    </article>
  );
}
