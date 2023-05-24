import { Link } from "react-router-dom";
import "./component-styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav-default">
      <ul className="nav-default__items">
        <li className="nav-default__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-default__item">
          <Link to="/">About</Link>
        </li>
        <li className="nav-default__item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-default__item">
          <Link to="/reserve-a-table">Reservations</Link>
        </li>
        <li className="nav-default__item">
          <Link to="/">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
