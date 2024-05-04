import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  // Whenever state variables updates, react trigger a reconcilation cycle(re-render the component)
  const [searchText, setSearchText] = useState("");
  const [
    listOfRestaurants,
    listOfFilteredRestaurant,
    setListOfFilteredRestaurant,
  ] = useRestaurant();
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
