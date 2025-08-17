import RestaurantCard from "./RestaurentCard";
import { restaurantData} from "../utils.js/mockData";
import { useState } from "react";

const Body = () => {
    const [restData, setRestData] = useState(restaurantData);

    const onClickFilter = () => {
       const filteredRes = restData.filter((restaurant) => restaurant.ratings > "4.5");
       setRestData(filteredRes);
    }
    return (
        <div className="body-container">
            {/* <div className='search-container'>
              <input type="text" placeholder="Search for restaurants..." className='search-input' />
              <button className='search-button'> Search </button>
            </div> */}
            <div className='filter-container'>
              <button className='filter-button' onClick={() => onClickFilter()}> Top Rated Restaurant </button>
            </div>
            <div className="restaurant-container">
                {restData.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.id}
                        resName={restaurant.resName}
                        cuisine={restaurant.cuisine}
                        ratings={restaurant.ratings}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;