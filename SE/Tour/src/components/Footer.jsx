import "../styles/footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/book">Book</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><FaPhone /> +123-456-7890</p>
          <p><FaPhone /> +111-222-3333</p>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaMapMarkerAlt /> Mumbai, India - 400104</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Tour & Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}
