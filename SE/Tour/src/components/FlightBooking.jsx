import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/flightBooking.css";

export default function FlightBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    packageName = "Not Selected",
    packageCategory = "Not Selected",
    packageImage = "",
    packagePrice = 0,
    hotelName = "Not Selected",
    hotelImage = "",
    hotelAmenities = [],
    hotelInteriorImages = [],
    transport = "Not Selected",
  } = location.state || {};

  const [numTravelers, setNumTravelers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatLayout = {
    Economy: Array.from({ length: 30 }, (_, i) => `E${i + 1}`),
    "Premium Economy": Array.from({ length: 20 }, (_, i) => `P${i + 1}`),
    Business: Array.from({ length: 10 }, (_, i) => `B${i + 1}`),
  };

  const availableSeats = seatLayout[flightClass];

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < numTravelers) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length !== numTravelers) {
      alert(`Please select ${numTravelers} seat(s)`);
      return;
    }

    navigate("/summary", {
      state: {
        packageName,
        packageCategory,
        packageImage,
        packagePrice,
        hotelName,
        hotelImage,
        hotelAmenities,
        hotelInteriorImages,
        transport,
        numTravelers,
        flightClass,
      },
    });
  };

  const transportEmoji = (type) => {
    switch (type) {
      case "Vistara Airlines":
      case "Air India":
        return "✈️";
      case "Luxury Bus":
        return "🚌";
      case "Luxury Train":
        return "🚆";
      default:
        return "🚗";
    }
  };

  return (
    <div className="flight-booking">
      <h1>{transport} Booking {transportEmoji(transport)}</h1>

      <div className="booking-options">
        <label>Number of Travelers:</label>
        <input
          type="number"
          min="1"
          value={numTravelers}
          onChange={(e) => {
            setNumTravelers(parseInt(e.target.value));
            setSelectedSeats([]);
          }}
        />

        <label>Class:</label>
        <select
          value={flightClass}
          onChange={(e) => {
            setFlightClass(e.target.value);
            setSelectedSeats([]);
          }}
        >
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business">Business</option>
        </select>

        <div className="seat-selection">
          <h3>Select Your Seats:</h3>
          <div className="seat-grid">
            {availableSeats.map((seat) => (
              <div
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>

        <button className="confirm-btn" onClick={handleConfirmBooking}>
          Confirm & Proceed to Payment 💳
        </button>
      </div>
    </div>
  );
}
