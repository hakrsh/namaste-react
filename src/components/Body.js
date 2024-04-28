import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofResaturants, setListofResaturants] = useState(resData); // array destructuring
  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() =>
            setListofResaturants(
              resData.filter(
                (restaurant) => restaurant.info.rating.aggregate_rating >= 4
              )
            )
          }
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {listofResaturants.map((data) => (
          <RestaurantCard key={data.info.resId} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
