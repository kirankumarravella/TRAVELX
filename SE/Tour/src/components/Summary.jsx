import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/summary.css";

export default function Summary() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};
  console.log("✅ Received state in Summary:", state);

  const {
    packageName,
    packageImage,
    packagePrice,
    hotelName,
    hotelImage,
    hotelAmenities,
    transport,
    numTravelers,
    flightClass,
  } = state || {};

  const [hotelCanceled, setHotelCanceled] = useState(false);
  const [transportCanceled, setTransportCanceled] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  if (!location.state) {
    return (
      <div className="error-message">
        No booking details found. Please start your booking again.
      </div>
    );
  }

  // Calculate total price after cancellations
  let totalAmount = packagePrice;
  if (hotelCanceled) totalAmount -= 500;
  if (transportCanceled) totalAmount -= 1000;

  const handleProceedToPayment = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // make sure to store this at login
  
      const response = await fetch("http://localhost:5000/api/summary/final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          userName: "Pravallika", // Replace this with actual dynamic name if available
          package: packageName,
          hotel: hotelCanceled ? null : hotelName,
          transport: transportCanceled ? null : transport,
          totalAmount,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ Summary saved:", data);
        navigate("/payment", {
          state: {
            packageName,
            packageImage,
            packagePrice,
            hotelName: hotelCanceled ? "Cancelled" : hotelName,
            hotelImage,
            hotelAmenities,
            transport: transportCanceled ? "Cancelled" : transport,
            numTravelers,
            flightClass,
            totalAmount,
          },
        });
      } else {
        console.error("❌ Failed to save summary:", data.message);
        alert("Could not save summary. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error in saving summary:", error);
      alert("An error occurred while saving the summary.");
    }
  };
  

  const toggleCancelModal = () => {
    setShowCancelModal(!showCancelModal);
  };

  const handleCancelOption = (option) => {
    if (option === "hotel") setHotelCanceled(true);
    if (option === "transport") setTransportCanceled(true);
    setShowCancelModal(false);
  };

  return (
    <div className="summary">
      <h1>Tour Summary & Payment 💳</h1>
      <div className="summary-card">
        <p><strong>Package:</strong> {packageName}</p>
        {packageImage && (
          <img src={packageImage} alt={packageName} className="summary-img" />
        )}
        <p><strong>Hotel:</strong> {hotelCanceled ? "Cancelled" : hotelName}</p>
        {!hotelCanceled && hotelImage && (
          <img src={hotelImage} alt={hotelName} className="summary-img" />
        )}
        <p><strong>Transport:</strong> {transportCanceled ? "Cancelled" : transport}</p>
        <p><strong>Travelers:</strong> {numTravelers}</p>
        <p><strong>Class:</strong> {flightClass}</p>
        <p><strong>Total Amount:</strong> ₹{totalAmount.toLocaleString()}</p>

        {/* Cancel Button */}
        <button className="cancel-btn" onClick={toggleCancelModal}>
          Cancel Service ❌
        </button>

        {/* Proceed to Payment Button */}
        <button className="pay-btn" onClick={handleProceedToPayment}>
          Proceed to Payment 💰
        </button>
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>What would you like to cancel?</h3>
            <button className="modal-btn" onClick={() => handleCancelOption("hotel")}>
              Cancel Hotel 🏨 (-₹500)
            </button>
            <button className="modal-btn" onClick={() => handleCancelOption("transport")}>
              Cancel Transport 🚗 (-₹1000)
            </button>
            <button className="modal-close" onClick={toggleCancelModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
