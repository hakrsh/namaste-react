import { SWIGGY_CDN } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    restaurant.info;
  return (
    <div className="m-2 p-2 w-52 bg-pink-50">
      <img src={SWIGGY_CDN + cloudinaryImageId} className="rounded-lg" />
      <h2 className="text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating {avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
