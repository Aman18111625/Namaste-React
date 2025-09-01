import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategories = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = category;
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between"
        onClick={() => setShowItems(!showItems)}
      >
        <span>
          {title} ({itemCards?.length})
        </span>
        <span className="cursor-pointer">{showItems ? "↑" : "↓"}</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
