import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <nav>
      <Link to="/">Tricks</Link>
      <Link to="/food">Food</Link>
      <Link to="/personality">Personality</Link>
    </nav>
  );
}
