import { SWIGGY_CDN } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    restaurant.info;
  return (
    <div className="res-card">
      <img src={SWIGGY_CDN + cloudinaryImageId} className="food-img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating {avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
