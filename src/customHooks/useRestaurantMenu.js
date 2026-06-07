import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant";

const useRestaurantMenu = (restaurantId) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchResMenuData = async () => {
      try {
        const response = await fetch(`${FETCH_MENU_URL}${restaurantId}`);
        if (!response.ok) {
          console.warn("Menu API returned non-OK status:", response.status);
          return;
        }
        const text = await response.text();
        if (!text || !text.trim().startsWith("{")) {
          console.warn("Menu API returned empty or non-JSON response. Ensure CORS extension is ON and you are logged into swiggy.com in this browser.");
          return;
        }
        const data = JSON.parse(text);
        const { cards } = data?.data || {};
        if (!cards || cards.length === 0) {
          console.warn("Menu API returned no cards. API may require a logged-in Swiggy session.", data);
          return;
        }
        setMenuData(cards);
      } catch (err) {
        console.error("Failed to fetch restaurant menu:", err.message);
      }
    };
    fetchResMenuData();
  }, [restaurantId]);

  return menuData;
};

export default useRestaurantMenu;
