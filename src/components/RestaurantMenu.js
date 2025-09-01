import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(-1);

  const menuData = useRestaurantMenu(id);
  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    menuData?.[2]?.card?.card?.info || {};
  const deliveryTime = sla?.deliveryTime;
  const categories =
    menuData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((cd) => {
      return (
        cd.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return menuData?.length === 0 || menuData === undefined ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-4">{name}</h1>
      <h3 className="text-lg">{cuisines?.join(", ")}</h3>
      <p className="text-gray-600">
        {costForTwoMessage}-{deliveryTime} mins
      </p>
      <p className="text-gray-600">Average Rating: {avgRating} ⭐</p>
      <h2 className="font-bold text-xl m-4">Menu</h2>
      <div>
        {categories.map((category, i) => (
          <RestaurantCategories
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
            showItems={i === showIndex}
            setShowItems={() => setShowIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
