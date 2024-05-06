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
  const filterRestuarants = () =>
    listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  const promoted = (restaurant) => restaurant?.info?.avgRating >= 4;
  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline, please check the internet connection!</h1>
    );
  }
  // Conditional rendering
  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="w-10/12 m-auto bg-gray-50 shadow-lg">
      <div className="flex w-6/12 m-auto p-2">
        <div>
          <input
            className="m-2 p-2 border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setListOfFilteredRestaurant(filterRestuarants());
              }
            }}
          ></input>
          <button
            className="p-2 bg-green-200 rounded-lg"
            onClick={() => {
              setListOfFilteredRestaurant(filterRestuarants());
            }}
          >
            Search
          </button>
          <button
            className="m-2 p-2 bg-red-200 rounded-lg"
            onClick={() =>
              setListOfFilteredRestaurant(
                listOfFilteredRestaurant.filter((restaurant) =>
                  promoted(restaurant)
                )
              )
            }
          >
            Promoted Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfFilteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {promoted(restaurant) ? (
                <RestaurantCardPromoted restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
