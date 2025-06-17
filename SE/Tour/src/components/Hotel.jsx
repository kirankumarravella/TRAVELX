import { useLocation, useNavigate } from "react-router-dom";
import "../styles/hotel.css";

const categoryImages = {
  adventure: "https://media.timeout.com/images/106041640/750/562/image.jpg",
  beach:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/227915114.jpg?k=04f5ea3d403ed43f243bcfe50e005d63b2dc4db0f5e46b1230939064bb46d298&o=&hp=1",
  art: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5",
  museum: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/14/5d/51/21c-museum-hotel-st-louis.jpg?w=900&h=-1&s=1",
  fun: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/1f/eb/fd/indulge-in-luxury-with.jpg?h=-1&s=1&w=900",
  view: "https://media-cdn.tripadvisor.com/media/photo-s/02/06/9a/fd/nighttime-view-of-city.jpg",


  
};

const hotelData = {
  beach: [
    {
      id: 1,
      name: "Beach Resort",
      image: [
        "beack.jpg",  // Beachfront
      ],
      amenities: [
        "Free WiFi",
        "Infinity Pool",
        "Private Beach Access",
        "Spa & Wellness Center",
        "Sea View Rooms",
      ],
      interiorImages: [
        
        "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",   // bedroom
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",    //poolside view
        "https://i.ytimg.com/vi/5lqsSWzOowg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB94IsdK0FkgrhCwnds3ywazgzZiQ",  
        "https://andilanaresort.com/public/images/43_la-ristorazione-0.jpg",     
      ],
    }, 
    {
      id: 2,
      name: "Sunset Beach Villas",
      image: [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg", // Front image showing beach villas
      ],
      amenities: [
        "Oceanfront Suites",
        "Private Pools",
        "Sunset Deck Dining",
        "Beach Sports Facilities",
        "Complimentary Breakfast",
      ],
      interiorImages: [
        "b3.jpg", // Villa bedroom with ocean view
        "b2.jpg", // Outdoor private pool area
        "b1.jpg", // Beachside dining area
        "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"  // Cozy seaside lounge
      ],
    },
    {
      id: 4,
      name: "The Twin Fin Hotel",
      image: [
        "https://images.trvl-media.com/lodging/1000000/40000/34500/34498/64d414c5.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Front image showing beach villas
      ],
      amenities: [
        "Oceanfront Suites",
        "Private Pools",
        "Meeting Facility",
        "Gym",
        "Complimentary Breakfast",
      ],
      interiorImages: [
        "https://images.trvl-media.com/lodging/1000000/40000/34500/34498/d9947f51.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Villa bedroom with ocean view
        "https://images.trvl-media.com/lodging/1000000/40000/34500/34498/04da4728.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Outdoor private pool area
        "https://images.trvl-media.com/lodging/1000000/40000/34500/34498/b6191ab4.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Beachside dining area
        "https://images.trvl-media.com/lodging/1000000/40000/34500/34498/f998658e.jpg?impolicy=resizecrop&rw=1200&ra=fit",  // Cozy seaside lounge
      ],
    },
    {
      id: 3,
      name: "Alohilani Resort Waikiki Beach",
      image: [
        "https://images.trvl-media.com/lodging/1000000/30000/21800/21781/a301abf3.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Front image showing beach villas
      ],
      amenities: [
        "Oceanfront Suites",
        "Private Pools",
        "Fire Works",
        "Beach Sports Facilities",
        "Complimentary Breakfast",
      ],
      interiorImages: [
        "https://images.trvl-media.com/lodging/1000000/30000/21800/21781/47e7bfec.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Villa bedroom with ocean view
        "https://images.trvl-media.com/lodging/1000000/30000/21800/21781/e2df71d2.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Outdoor private pool area
        "https://images.trvl-media.com/lodging/1000000/30000/21800/21781/0cfa0e2a.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Beachside dining area
        "https://images.trvl-media.com/lodging/1000000/30000/21800/21781/a579a06e.jpg?impolicy=resizecrop&rw=1200&ra=fit"  // Cozy seaside lounge
      ],
    },
    
  ],
 
    mountain: [
      { 
        id: 1, 
        name: "Mountain Retreat", 
        image: "https://cdn.sanity.io/images/ocl5w36p/prod3/d962d58342dc326b7ef65f6b29fe681ffdac5d7d-3840x1861.jpg?w=480&auto=format&dpr=2",
        amenities: ["Free WiFi", "Spa", "Mountain View", "Heated Pool"],
        interiorImages: [
          "https://cdn.sanity.io/images/ocl5w36p/prod3/fb53d99d5e53e2da78da93a9d064113d8e19ea63-912x967.jpg?w=768&auto=format&dpr=2",
          "https://cdn.sanity.io/images/ocl5w36p/prod3/4ea12c45b7c1f6723c370562106d22cd308c24d4-1400x860.jpg?w=768&auto=format&dpr=2",
        ],
      },
      { 
        id: 2, 
        name: "Snowy Peaks Lodge", 
        image: "https://images.stockcake.com/public/2/9/9/29901546-7ca9-486b-ae90-9c13fff03964_large/cozy-mountain-lodge-stockcake.jpg",
        amenities: ["Ski Resort", "Restaurant", "Free Breakfast"],
        interiorImages: [ "https://i.pinimg.com/736x/07/fd/9e/07fd9ecbfe5ba3104d68750190b06b6b.jpg",
          "https://images.stockcake.com/public/f/a/6/fa609268-208f-4d7f-b705-ddb8c53770aa_large/cozy-mountain-lodge-stockcake.jpg",
        ],
      },
      { 
        id: 3, 
        name: "Wildflower Hall", 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=900&h=500&s=1",
        amenities: ["Swimming pool", "Restaurant", "Free Breakfast"],
        interiorImages: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/56/73/lord-kitchener-suite.jpg?w=900&h=-1&s=1",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/56/4e/outdoor-infinity-whirlpool.jpg?w=1400&h=-1&s=1",
        ],
      },
      { 
        id: 4, 
        name: "Regenta Resort", 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/84/2e/9a/regenta-resort-and-spa.jpg?w=1400&h=-1&s=1",
        amenities: ["Swimming pool", "Restaurant", "Free Breakfast"],
        interiorImages: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/84/2f/1a/regenta-resort-and-spa.jpg?w=1400&h=-1&s=1",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/84/2e/bc/regenta-resort-and-spa.jpg?w=1400&h=-1&s=1",
        ],
      },
    ],
  art: [
    {
      id: 1,
      name: "Taj Deccan",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/80/taj-deccan.jpg?w=1400&h=-1&s=1",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room","restaurant"],
      interiorImages: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/29/c6/30/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7a/b6/68/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7a/b6/6a/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/b0/swimming-pool.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/ac/innovation-meeting-room.jpg?w=1400&h=-1&s=1",
      ],
    },
    {id: 2,
      name: "The Golkonda Hotel",
      image: "https://hellohyderabad.org/wp-content/uploads/2024/07/Untitled-design-32-1.jpg",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/00/5e/47/premium-room-king-bed.jpg?w=900&h=500&s=1",
         "https://content.jdmagicbox.com/v2/comp/hyderabad/r9/040pxx40.xx40.110430074604.z8r9/catalogue/the-golkonda-hotel-masab-tank-hyderabad-4-star-hotels-qwwtwwa8do-250.jpg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/15010147.jpg?k=16f9901ca63475336b5c49fc2344d12745b5a0294ea78f0cc970f974285aeafa&o=&hp=1",
         "https://www.thegolkondahotel.com/images/food/4.jpg",
      ],
    },
    {
      id: 3,
      name: "Avasa Hotel",
      image: "https://www.hotelscombined.in/rimg/himg/af/4f/99/expedia_group-627470-49802259-171448.jpg?width=968&height=607&crop=true",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://www.hotelscombined.in/rimg/himg/d3/3c/f8/expediav2-627470-7260e7-210973.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/06/52/ae/expedia_group-627470-87778461-160284.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/60/0e/b6/expediav2-627470-d54202-561264.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/21/a2/42/expedia_group-627470-135347582-125107.jpg?width=968&height=607&crop=true",
      ],
    },
    {
      id: 4,
      name: "Park Hyatt",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/22/0f/a5/hotel-facade-evening.jpg?w=1400&h=-1&s=1",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f5/5b/a1/lobby--v17451994.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/16/74/72/outdoor-temperature-controlled.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b5/8b/11/tre-forni.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/16/73/72/tiramisu-at-tre-forni.jpg?w=2000&h=-1&s=1",
      ],
    },
  ],

  museum: [
    {
      id: 1,
      name: "Taj Deccan",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/80/taj-deccan.jpg?w=1400&h=-1&s=1",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Swimming pool","Restaurant"],
      interiorImages: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/29/c6/30/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7a/b6/68/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7a/b6/6a/caption.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/ac/innovation-meeting-room.jpg?w=1400&h=-1&s=1",
      ],
    },
    {
      id: 2,
      name: "The Golkonda Hotel",
      image: "https://hellohyderabad.org/wp-content/uploads/2024/07/Untitled-design-32-1.jpg",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/00/5e/47/premium-room-king-bed.jpg?w=900&h=500&s=1",
         "https://content.jdmagicbox.com/v2/comp/hyderabad/r9/040pxx40.xx40.110430074604.z8r9/catalogue/the-golkonda-hotel-masab-tank-hyderabad-4-star-hotels-qwwtwwa8do-250.jpg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/15010147.jpg?k=16f9901ca63475336b5c49fc2344d12745b5a0294ea78f0cc970f974285aeafa&o=&hp=1",
         "https://www.thegolkondahotel.com/images/food/4.jpg",
      ],
    },
    {
      id: 3,
      name: "Avasa Hotel",
      image: "https://www.hotelscombined.in/rimg/himg/af/4f/99/expedia_group-627470-49802259-171448.jpg?width=968&height=607&crop=true",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://www.hotelscombined.in/rimg/himg/d3/3c/f8/expediav2-627470-7260e7-210973.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/06/52/ae/expedia_group-627470-87778461-160284.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/60/0e/b6/expediav2-627470-d54202-561264.jpg?width=968&height=607&crop=true",
         "https://www.hotelscombined.in/rimg/himg/21/a2/42/expedia_group-627470-135347582-125107.jpg?width=968&height=607&crop=true",
      ],
    },
    {
      id: 4,
      name: "Park Hyatt",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/22/0f/a5/hotel-facade-evening.jpg?w=1400&h=-1&s=1",
      amenities: ["Art Gallery", "Free WiFi", "Business Center","Conference room"],
      interiorImages: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f5/5b/a1/lobby--v17451994.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/16/74/72/outdoor-temperature-controlled.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b5/8b/11/tre-forni.jpg?w=2000&h=-1&s=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/16/73/72/tiramisu-at-tre-forni.jpg?w=2000&h=-1&s=1",
      ],
    },
  ],

};


export default function Hotel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageName, packageCategory, packageImage, packagePrice } = location.state || {};

  const hotels = hotelData[packageCategory.toLowerCase()] || hotelData["beach"];

  return (
    <div className="hotel-page">
      <div className="hotel-header" style={{ backgroundImage: `url(${categoryImages[packageCategory.toLowerCase()]})` }}>
        <h1>Hotels for {packageName}</h1>
      </div>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-img" />
            <h2>{hotel.name}</h2>
            <button
              className="book-btn"
              onClick={() =>
                navigate("/hotel-details", {
                  state: {
                    packageName,
                    packageCategory,
                    packageImage,
                    packagePrice,
                    hotelName: hotel.name,
                    hotelImage: hotel.image,
                    hotelAmenities: hotel.amenities,
                    hotelInteriorImages: hotel.interiorImages,
                  },
                })
              }
            >
              Select Hotel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
