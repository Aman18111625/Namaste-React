import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant";

const useRestaurantMenu = (restaurantId) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchResMenuData = async () => {
      const response = await fetch(`${FETCH_MENU_URL}${restaurantId}`);
      const data = await response.json();
      const { cards } = data?.data || {};
      setMenuData(cards);
    };
    fetchResMenuData();
  }, [restaurantId]);

  return menuData;
};

export default useRestaurantMenu;
