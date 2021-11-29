import BreedChart from "../../components/BreedChart/BreedChart";

export default function Breeds() {
  return (
    <article>
      <h2>My Genetic Makeup</h2>
      <div className="article-body">
        <p>
          My humans have conflicting feelings about how much to care about a
          dog's breed. But since a lot of people are curious, here are my embark
          results. I'm around 70% bully breeds and 30% herding breeds and 100%
          Daisy!
        </p>
        <BreedChart />
      </div>
    </article>
  );
}
