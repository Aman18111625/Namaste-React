import RestaurantCard, {RestaurantCardWithPromotedLabel} from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NO_RESULT_IMAGE_URL } from "../utils.js/constant";
import { Link } from "react-router";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    console.log('data-->', data);
    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestData(restaurants);
    setFilteredData(restaurants);
  };

  const PromotedRestaurantCard = RestaurantCardWithPromotedLabel(RestaurantCard);

  return restData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="filter-container">
        <div className="search m-4">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="border border-gray-400 p-2 rounded w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-blue-300 p-2 border border-blue-300 rounded hover:bg-blue-300 hover:text-white cursor-pointer mx-2" onClick={() => onClickSearch()}>
            Search
          </button>
          <button className="text-blue-300 p-2 border border-blue-300 rounded hover:bg-blue-300 hover:text-white cursor-pointer mx-2" onClick={() => onClickFilter()}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
     {filteredData?.length === 0 ? (
  <div className="flex justify-center items-center flex-col">
    <img src={NO_RESULT_IMAGE_URL} alt="No results found" />
  </div>
) : (
  <div className="flex flex-wrap">
    {filteredData?.map((restaurant) => (
      <Link
        to={`/restaurant/${restaurant?.info?.id}`}
        key={restaurant?.info?.id}
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
