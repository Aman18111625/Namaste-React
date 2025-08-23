import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NO_RESULT_IMAGE_URL } from "../utils.js/constant";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchText, setSearchText] = useState("");

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyAPI = fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
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
              resData={restaurant?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
