import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/packages.css";

const allPackages = [
  { id: 1, title: "Beach Paradise", category: "View", image: "https://cdn.europosters.eu/image/1300/wall-murals/paradise-beach-i25166.jpg", price: 6000 },
  { id: 2, title: "Mountain Escape", category: "Adventure", image: "https://w0.peakpx.com/wallpaper/217/59/HD-wallpaper-cottage-in-swiss-alps-house-cottage-dusk-cabin-beautiful-twilight-clouds-switzerland-lights-mountain-swiss-evening-alps-sky-winter-snow-slope.jpg", price: 6500 },
  { id: 3, title: "City Lights", category: "View", image: "https://wallpaperbat.com/img/112577-burj-khalifa-high-definition-wallpaper-2019.jpg", price: 8000 },
  { id: 4, title: "Art Gallery", category: "Art", image: "https://www.balinews.co.id/wp-content/uploads/2022/05/aaa-The-Nyaman-Gallery-min.jpg", price: 7000 },
  { id: 5, title: "Museums", category: "Museums", image: "https://media1.thrillophilia.com/filestore/z21yq5am9jt646tiaslu9jq1qxni_1586866174_fi.jpg?w=400&dpr=2", price: 8000 },
  { id: 6, title: "Snowy Wonderland", category: "Adventure", image: "https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000", price: 9000 },
  { id: 7, title: "Historic Castle Tour", category: "Art", image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000", price: 6000 },
  { id: 8, title: "Amusement park", category: "Fun", image: "https://www.peachprime.in/wp-content/uploads/2025/01/11.2_2_11zon.webp", price: 5000 },
];
const categoryMap = {
  View:"view",
  Adventure: "adventure",
  Art: "art",
  Museums: "museum",
  Fun: "fun",
};

export default function Packages() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [visibleCount, setVisibleCount] = useState(4); // Show first 4 packages

  useEffect(() => {
    if (location.state?.serviceCategory) {
      setCategory(location.state.serviceCategory);
    }
  }, [location]);

  const handleBookNow = (pkg) => {
    console.log("✅ Sending from Packages:", pkg);
    navigate("/hotel", {
      state: {
        packageName: pkg.title,
        packageImage: pkg.image,
        packagePrice: pkg.price,
        packageCategory: categoryMap[pkg.category] || "luxury",
      },
    });
  };

  const filteredPackages = allPackages.filter(
    (pkg) =>
      (category === "All" || pkg.category === category) &&
      pkg.title.toLowerCase().includes(search.toLowerCase())
  );

  const visiblePackages = filteredPackages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more packages each click
  };

  return (
    <section
      className="packages"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transition: "background 0.5s ease",
      }}
    >
      <h1 className="title">Explore Our Packages</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search packages..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Adventure">Mountain</option>
          <option value="View">View</option>
          <option value="Art">Art</option>
          <option value="Museums">Museum</option>
          <option value="Fun">Fun</option>
        </select>
      </div>

      <div className="package-grid">
        {visiblePackages.length > 0 ? (
          visiblePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card"
              onMouseEnter={() => setBackgroundImage(pkg.image)}
              onMouseLeave={() => setBackgroundImage("")}
            >
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <div className="package-info">
                <h2>{pkg.title}</h2>
                <p>₹{pkg.price.toLocaleString()}</p>
                <button className="book-btn" onClick={() => handleBookNow(pkg)}>
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No packages found</p>
        )}
      </div>

      {visiblePackages.length < filteredPackages.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
