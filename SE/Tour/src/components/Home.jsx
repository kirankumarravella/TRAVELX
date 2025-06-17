import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/home.css";

const images = [
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
];


export default function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="home">
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>
        <div className="overlay">
          <h1>Explore the World 🌍</h1>
          <p>Find your dream destination effortlessly!</p>
          <button onClick={() => navigate("/auth")} className="btn">
            Get Started 🚀
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <div className="about-container">
          <img
            src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000"
            alt="About Us"
            className="about-img"
          />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are a leading travel agency dedicated to helping travelers explore beautiful destinations worldwide. With expert guides and seamless booking, your dream vacation is just a few clicks away!
            </p>
            <button className="read-more" onClick={() => navigate("/contact")}>Read More</button>

          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          {[
            { name: "Bali", img: "bali.jpg" },
            { name: "Switzerland", img: "swiss.jpg" },
            { name: "Paris", img: "paris.jpg" },
          ].map((place, index) => (
            <div className="destination-card" key={index}>
              <img src={place.img} alt={place.name} />
              <h3>{place.name}</h3>
              <button onClick={() => navigate("/auth")}>View Packages</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"Best trip ever! Everything was well organized."</p>
            <strong>- Ayesha</strong>
          </div>
          <div className="testimonial-card">
            <p>"Loved the hotels and tour guides. Highly recommend!"</p>
            <strong>- Karthik</strong>
          </div>
          <div className="testimonial-card">
            <p>"Loved the hotels and tour guides. Highly recommend!"</p>
            <strong>- Kriti</strong>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <h3>🛫 Hassle-Free Booking</h3>
            <p>Book in just a few clicks and get instant confirmation.</p>
          </div>
          <div className="benefit-card">
            <h3>💬 24/7 Support</h3>
            <p>Our team is always ready to help you during your journey.</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Tailored Packages</h3>
            <p>Customize your travel package the way you want it.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <h2>Ready for your next adventure?</h2>
        <button onClick={() => navigate("/auth")}>Book Now</button>
      </section>
    </>
  );
}
