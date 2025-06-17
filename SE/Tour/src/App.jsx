import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Packages from "./components/Packages";
import Hotel from "./components/Hotel";
import HotelDetails from "./components/HotelDetails";
import Transport from "./components/Transport";
import Summary from "./components/Summary";
import Payment from "./components/Payment";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlightBooking from "./components/FlightBooking";


import { useState } from "react";

function AppContent() {
  const location = useLocation();

  // 🆕 Booking Details State
  const [bookingDetails, setBookingDetails] = useState({
    packageName: "",
    hotelName: "",
    transportType: "",
    totalAmount: 0,
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {location.pathname === "/home" && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
