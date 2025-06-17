import { useLocation, useNavigate } from "react-router-dom";
import "../styles/hotelDetails.css";

export default function HotelDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Ensure all necessary state values are present
  const {
    packageName = "Unknown Package",
    packageCategory = "",
    packageImage = "",
    packagePrice = 0,
    hotelName = "Unknown Hotel",
    hotelImage = "",
    hotelAmenities = [],
    hotelInteriorImages = [],
  } = location.state || {};

  if (!location.state) {
    return <div className="error-message">Hotel details not found!</div>;
  }

  return (
    <div className="hotel-details-page">
      {/* Hero Section */}
      <div className="hotel-hero" style={{ backgroundImage: `url(${hotelImage})` }}>
        <div className="hero-overlay">
          <h1>{hotelName}</h1>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities-section">
        <h2>Amenities</h2>
        <div className="amenities-grid">
          {hotelAmenities.length > 0 ? (
            hotelAmenities.map((amenity, index) => (
              <div key={index} className="amenity">
                <span>✔️</span> {amenity}
              </div>
            ))
          ) : (
            <p>No amenities available</p>
          )}
        </div>
      </div>

      {/* Interior Images */}
      <div className="interior-images">
        <h2>Inside {hotelName}</h2>
        <div className="image-gallery">
          {hotelInteriorImages.length > 0 ? (
            hotelInteriorImages.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image} alt={`Room ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>No interior images available</p>
          )}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="promo-banner">
        <h2>Your Vacation Awaits</h2>
        <p>Enjoy your stay at {hotelName} with world-class facilities and a beautiful ambiance.</p>
        <button
          onClick={() =>
            navigate("/transport", {
              state: {
                packageName,
                packageCategory,
                packageImage,
                packagePrice,
                hotelName, // make sure this exists
                hotelImage,
                hotelAmenities,
                hotelInteriorImages,
              },
            })
          }
          className="book-btn"
        >
          Proceed to Transport
        </button>
      </div>
    </div>
  );
}
