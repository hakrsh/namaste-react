import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RESTAURANT_API, X_CORS_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  // Whenever state variables updates, react trigger a reconcilation cycle(re-render the component)
  console.log("Body Rendered!");
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // array destructuring
  const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // useEffect takes 2 arguments, a callback function and a an optional dependecy array
  // if no dependency array => useEffect is callled on every render of the component
  // if dependency array is [] => useEffect is callled once (on initial render)
  // if dependency array is not empty => useEffect is callled every time the dependency updates
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("fetching data");
    const res = await fetch(RESTAURANT_API, {
      headers: {
        "x-cors-api-key": X_CORS_API_KEY,
      },
    });
    const data = await res.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestaurant(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Conditional rendering
  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setListOfFilteredRestaurant(
                listOfRestaurants.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() =>
            setListOfFilteredRestaurant(
              listOfFilteredRestaurant.filter(
                (restaurant) => restaurant.info.avgRating >= 4
              )
            )
          }
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurant.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
