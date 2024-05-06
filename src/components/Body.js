import RestaurantCard, { withPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Whenever state variables updates, react trigger a reconcilation cycle(re-render the component)
  const [searchText, setSearchText] = useState("");
  const [
    listOfRestaurants,
    listOfFilteredRestaurant,
    setListOfFilteredRestaurant,
  ] = useRestaurant();
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromoted(RestaurantCard);
  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline, please check the internet connection!</h1>
    );
  }
  // Conditional rendering
  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div>
          <input
            className="m-2 p-2 border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-2 bg-green-200 rounded-lg"
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
          <button
            className="m-2 p-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {listOfFilteredRestaurant.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {Math.random() < 0.5 ? (
              <RestaurantCardPromoted restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
