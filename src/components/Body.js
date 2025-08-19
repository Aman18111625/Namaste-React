import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NO_RESULT_IMAGE_URL } from "../utils.js/constant";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onClickFilter = () => {
    const filteredRes = restData.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.3
    );
    setFilteredData(filteredRes);
  };

  const onClickSearch = () => {
    console.log("searching for:", searchTerm);
    const filteredRes = restData.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    console.log("search results:", filteredRes);
    setFilteredData(filteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyAPI = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await swiggyAPI;
    const data = await response.json();
    const restaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestData(restaurants);
    setFilteredData(restaurants);
  };

  return restData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={() => onClickSearch()}>
            Search
          </button>
          <button className="filter-button" onClick={() => onClickFilter()}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      {filteredData?.length === 0 ? (
        <div className="no-results">
          <img src={NO_RESULT_IMAGE_URL} alt="No results found" />
        </div>
      ) : (
        <div className="restaurant-container">
          {filteredData?.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resName={restaurant?.info?.name}
              cuisine={restaurant?.info?.cuisines.join(", ")}
              ratings={restaurant?.info?.avgRating}
              deliveryTime={restaurant?.info?.sla?.deliveryTime}
              cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
