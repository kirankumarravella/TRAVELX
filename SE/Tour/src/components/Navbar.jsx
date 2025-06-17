import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // 🔥 Import CSS file

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className={dark ? "navbar dark" : "navbar"}>
      <div className="container">
        <span className="logo">TravelX</span> {/* Removed Link */}
        <ul className="menu">
          {["Home", "Packages", "Bookings", "Contact"].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="menu-item">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
