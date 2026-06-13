import RestaurantCard, {
  RestaurantCardWithPromotedLabel,
} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NO_RESULT_IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoriesList = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Noodles", emoji: "🍜" },
    { name: "Salad", emoji: "🥗" },
    { name: "Biryani", emoji: "🍛" },
    { name: "Dessert", emoji: "🍰" },
  ];

  const handleCategorySelect = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      setFilteredData(restData);
    } else {
      setSelectedCategory(categoryName);
      const keyword = categoryName.toLowerCase();
      const filtered = restData.filter((restaurant) => {
        const cuisinesList = restaurant?.info?.cuisines?.map(c => c.toLowerCase()) || [];
        const name = restaurant?.info?.name?.toLowerCase() || "";

        if (keyword === "pizza") {
          return cuisinesList.includes("pizza") || cuisinesList.includes("italian") || name.includes("pizza");
        } else if (keyword === "burger") {
          return cuisinesList.includes("burgers") || cuisinesList.includes("fast food") || name.includes("burger");
        } else if (keyword === "noodles") {
          return cuisinesList.includes("noodles") || cuisinesList.includes("chinese") || name.includes("chinese") || name.includes("noodles");
        } else if (keyword === "salad") {
          return cuisinesList.includes("salad") || cuisinesList.includes("healthy") || name.includes("salad");
        } else if (keyword === "biryani") {
          return cuisinesList.includes("biryani") || name.includes("biryani");
        } else if (keyword === "dessert") {
          return cuisinesList.includes("desserts") || cuisinesList.includes("bakery") || cuisinesList.includes("sweets") || name.includes("dessert") || name.includes("cake");
        }
        return false;
      });
      setFilteredData(filtered);
    }
  };

  const onClickFilter = () => {
    const filteredRes = restData.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setFilteredData(filteredRes);
  };

  const onClickSearch = () => {
    const filteredRes = restData.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilteredData(filteredRes);
  };

  // Debouncing search: auto-trigger search after 1.5 seconds of typing inactivity
  useEffect(() => {
    // If search term is empty, immediately show all restaurants
    if (searchTerm.trim() === "") {
      setFilteredData(restData);
      return;
    }

    const timer = setTimeout(() => {
      const filteredRes = restData.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
      setFilteredData(filteredRes);
    }, 1500); // 1.5 seconds debounce for snappier feedback

    return () => clearTimeout(timer);
  }, [searchTerm, restData]); // run when search term or underlying data changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyAPI = fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    const response = await swiggyAPI;
    const data = await response.json();
    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestData(restaurants);
    setFilteredData(restaurants);
  };

  const PromotedRestaurantCard =
    RestaurantCardWithPromotedLabel(RestaurantCard);

  return restData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-6 my-6">
      {/* 1. Modern Hero Section */}
      <section className="bg-gradient-to-br from-[#ff6b35] to-[#ff9f1c] text-white py-14 px-8 text-center rounded-3xl mb-10 shadow-lg relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight">🍔 Find Your Favorite Food</h1>
        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">Discover top-rated restaurants and delicious cuisines delivered straight to your door</p>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 max-w-xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-white/20">
          <input
            type="text"
            placeholder="Search food, restaurants, cuisines..."
            className="flex-grow px-5 py-3 text-gray-800 focus:outline-none rounded-xl sm:rounded-full bg-white text-base shadow-inner placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-[#ff6b35] hover:bg-[#e0531f] text-white px-8 py-3 rounded-xl sm:rounded-full font-bold text-base transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            onClick={onClickSearch}
          >
            Search
          </button>
        </div>
        <div className="absolute right-10 bottom-0 text-9xl opacity-5 select-none pointer-events-none">🍕</div>
      </section>

      {/* 2. Interactive Food Categories Slider */}
      <div className="mb-10">
        <h2 className="text-2xl font-black text-gray-800 mb-5 flex items-center gap-2">
          What's on your mind? 😋
        </h2>
        <div className="flex flex-wrap gap-4 overflow-x-auto pb-2 justify-start sm:justify-center">
          {categoriesList.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategorySelect(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold transition-all shadow-sm hover:shadow-md cursor-pointer border ${selectedCategory === cat.name
                  ? "bg-[#ff6b35] border-[#ff6b35] text-white scale-105"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#ff6b35] hover:text-[#ff6b35]"
                }`}
            >
              <span className="text-xl">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Offer Banner Section */}
      <div id="offers" className="mb-10 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden border border-gray-800">
        <div className="z-10 mb-4 md:mb-0">
          <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Special Offer
          </span>
          <h2 className="text-3xl font-black mt-3 mb-1">50% OFF on First Order</h2>
          <p className="text-gray-300 text-sm">Experience gourmet meals delivered hot and fresh</p>
        </div>
        <div className="z-10 flex items-center gap-3 bg-white/5 backdrop-blur-xs px-5 py-3 rounded-2xl border border-white/10">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Use Code:</span>
          <span className="border border-dashed border-[#ff9f1c] text-[#ff9f1c] bg-[#ff9f1c]/10 px-4 py-1 rounded-lg font-black tracking-widest text-base uppercase">
            NAMMA50
          </span>
        </div>
        <div className="text-8xl opacity-5 absolute right-10 -bottom-5 select-none pointer-events-none">🎉</div>
      </div>

      {/* 4. Trending Restaurants List */}
      <div id="restaurants" className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-800 flex items-center gap-2">
            🔥 Trending Near You
          </h2>
          <p className="text-gray-500 text-sm mt-1">Explore top-rated dining spots handpicked for you</p>
        </div>
        <button
          className="flex items-center gap-2 text-sm font-bold border border-gray-300 hover:border-[#ff6b35] text-gray-700 hover:text-[#ff6b35] px-5 py-2.5 rounded-full transition-all cursor-pointer bg-white shadow-xs hover:shadow-sm"
          onClick={onClickFilter}
        >
          ⭐ Filter Top Rated (4.2+)
        </button>
      </div>

      {filteredData?.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-16 text-center">
          <img src={NO_RESULT_IMAGE_URL} alt="No results found" className="w-64 h-auto opacity-70 mb-4" />
          <h3 className="font-extrabold text-xl text-gray-700 mb-1">No Restaurants Found</h3>
          <p className="text-gray-500 max-w-md">Try checking your spelling or selecting a different category filter</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center -mx-4">
          {filteredData?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
              className="hover:scale-102 transition-transform duration-200"
            >
              {restaurant?.info?.veg ? (
                <PromotedRestaurantCard resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
