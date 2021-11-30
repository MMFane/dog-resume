import C3Chart from "react-c3js";
import "c3/c3.css";
import { breeds } from "../../data/intro";

const colors = ["#2f4661", "#3d5b7d", "#4c719c", "#5b87ba", "#6fa2de"];

const data = {
  columns: [],
  colors: {},
  type: "pie",
  size: {
    height: 250,
    width: 250,
  },
};

Object.entries(breeds).forEach((breed, index) => {
  data.columns.push([breed[0], breed[1]]);
  data.colors[breed[0]] = colors[index];
});

export default function BreedChart() {
  return <C3Chart data={data} />;
}
