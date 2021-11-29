import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <nav>
      <Link to="/">Tricks</Link>
      <Link to="/food">Diet</Link>
      <Link to="/personality">Personality</Link>
      <Link to="/breeds">Breeds</Link>
      <Link to="/emergency">Emergency</Link>
    </nav>
  );
}
