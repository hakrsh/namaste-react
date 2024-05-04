import { useState, useEffect } from "react";
import { RESTAURANT_API, X_CORS_API_KEY } from "./constants";
const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // array destructuring
  const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);
  // useEffect takes 2 arguments, a callback function and a an optional dependecy array
  // if no dependency array => useEffect is callled on every render of the component
  // if dependency array is [] => useEffect is callled once (on initial render)
  // if dependency array is not empty => useEffect is callled every time the dependency updates
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      console.log("fetching restaurants");
      const res = await fetch(RESTAURANT_API, {
        headers: {
          "x-cors-api-key": X_CORS_API_KEY,
        },
      });
      const data = await res.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants);
      setListOfFilteredRestaurant(restaurants);
    } catch (e) {
      console.error(e.message);
    }
  };
  return [
    listOfRestaurants,
    listOfFilteredRestaurant,
    setListOfFilteredRestaurant,
  ];
};
export default useRestaurant;
