import { useNavigate, useLocation } from "react-router-dom";
import "../styles/transport.css";

const transportOptions = [
  { id: 1, name: "Vistara Airlines", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/86/aa/2d/vistara.jpg?w=1200&h=-1&s=1" },
  { id: 2, name: "Air India", image: "https://assets.cntraveller.in/photos/64d61d2f500968bfe5b8a97b/16:9/w_3504,h_1971,c_limit/Air-India-3.jpg" },
  { id: 3, name: "Luxury Bus", image: "https://i.pinimg.com/736x/a1/a5/d6/a1a5d67fe184f476b11f6c84f43da44a.jpg" },
  { id: 4, name: "Luxury Train", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/JR_East_E001_series_Train_Suite_Shiki-shima_20170619.jpg/1200px-JR_East_E001_series_Train_Suite_Shiki-shima_20170619.jpg" },
];

export default function Transport() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    packageName, packageCategory, packageImage, packagePrice, 
    hotelName, hotelImage, hotelAmenities, hotelInteriorImages
  } = location.state || {};

  console.log("✅ Received in Transport:", location.state);

  const handleTransportSelect = (transport) => {
    navigate("/flight-booking", { 
      state: { 
        packageName, packageCategory, packageImage, packagePrice, 
        hotelName, hotelImage,hotelAmenities, hotelInteriorImages,
        transport: transport.name // ✅ Ensures transport selection is passed correctly
      }
    });
  };

  const handleSkipTransport = () => {
    navigate("/summary", { 
      state: { 
        packageName, packageCategory, packageImage, packagePrice, 
        hotelName, hotelImage, hotelAmenities, hotelInteriorImages,
        transport: "Not Selected" // ✅ Fix: Explicitly setting transport as "Not Selected"
      }
    });
  };

  return (
    <section className="transport">
      <div className="transport-description">
        <h1>Choose Your Transport ✈🚌🚆</h1>
        <p>Select the best transport option for your journey.</p>
        <button className="skip-btn" onClick={handleSkipTransport}>Skip Transport 🚗❌</button>
      </div>

      <div className="transport-options">
        {transportOptions.map((option) => (
          <div key={option.id} className="transport-card" onClick={() => handleTransportSelect(option)}>
            <img src={option.image} alt={option.name} />
            <h2>{option.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}