import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restData, setRestData] = useState([]);

    const onClickFilter = () => {
       const filteredRes = restData.filter((restaurant) => restaurant?.info?.avgRating > 4.3);
       setRestData(filteredRes);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const swiggyAPI = fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await swiggyAPI;
        const data = await response.json();
        const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestData(restaurants);
    }

    if (restData?.length === 0) {
        return <Shimmer/>
    }

    return (
        restData?.length === 0 ? (
            <Shimmer />
        ) : (
            <div className="body-container">
                {/* <div className='search-container'>
                  <input type="text" placeholder="Search for restaurants..." className='search-input' />
                  <button className='search-button'> Search </button>
                </div> */}
            <div className='filter-container'>
              <button className='filter-button' onClick={() => onClickFilter()}> <strong>Top Rated Restaurant</strong> </button>
            </div>
            <div className="restaurant-container">
                {restData.map((restaurant) => (
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
        </div>
        )
    )
}

export default Body;