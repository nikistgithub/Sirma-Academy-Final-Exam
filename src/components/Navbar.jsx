import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logos/EURO2024.png" alt="logo" className="logo" />
      </div>
      <div className="navbar-title">
        European Football Championship 2024
      </div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/bracket" className="navbar-link">
              Bracket
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/matches" className="navbar-link">
              Matches
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/teams" className="navbar-link">
              Teams
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/records" className="navbar-link">
              Records
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
