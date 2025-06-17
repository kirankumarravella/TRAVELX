import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/payment.css";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { packageName, hotel, transport, numTravelers, flightClass, totalAmount } = location.state || {};

  useEffect(() => {
    if (!totalAmount) {
      alert("Total amount is not available.");
      navigate("/summary"); // Redirect back if there's no amount
      return;
    }

    const amountInPaise = totalAmount * 100; // Convert ₹ to paise

    const options = {
      key: "rzp_test_7pUqM6wJehjYEi", // Replace with actual Razorpay key
      amount: amountInPaise,
      currency: "INR",
      name: "Tour & Travel",
      description: "Booking Payment",
      handler: (response) => {
        alert(`✅ Payment Successful! ID: ${response.razorpay_payment_id}`);
        navigate("/"); // Redirect to homepage or success page after payment
      },
      prefill: {
        name: "UserName",
        email: "user@example.com",
        contact: "7093189957",
      },
      theme: {
        color: "#007bff",
      },
    };

    // Load Razorpay script dynamically
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
      document.body.appendChild(script);
    } else {
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [totalAmount, navigate]);

  return (
    <div className="payment">
      <h1>Processing Payment... 💳</h1>
      <p>If the payment window doesn't open, please click <strong>Reload</strong> and try again.</p>
    </div>
  );
}
