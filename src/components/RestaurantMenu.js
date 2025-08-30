import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";

const RestaurantMenu = () => {

  const {id} = useParams();
  const menuData = useRestaurantMenu(id);

  const {name, cuisines, costForTwoMessage, avgRating, sla} = menuData?.[2]?.card?.card?.info || {};
  const deliveryTime = sla?.deliveryTime;
  const {itemCards} = menuData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

  return (
      menuData?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="m-4 text-center">
          <h1>{name}</h1>
          <h3>{cuisines?.join(", ")}</h3>
          <p>{costForTwoMessage}-{deliveryTime} mins</p>
          <p>Average Rating: {avgRating} ⭐</p>
          <h3>Restaurant Menu</h3>
          <ul>
            {
              itemCards?.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
              ))
            }
          </ul>
        </div>
      )
  );
};

export default RestaurantMenu;
