import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API, X_CORS_API_KEY } from "./constants";

const useRestaurantInfo = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const fetchMenu = async () => {
    console.log("Fetching restuarant info....");
    const res = await fetch(RESTAURANT_MENU_API + restaurantId, {
      headers: {
        "x-cors-api-key": X_CORS_API_KEY,
      },
    });
    const data = await res.json();
    setRestaurantInfo(data?.data);
    console.log("Done fetching restuarant info....");
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return restaurantInfo;
};

export default useRestaurantInfo;
