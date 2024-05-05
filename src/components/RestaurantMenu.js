import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantInfo(restaurantId);
  if (!resInfo?.cards?.length) return <Shimmer />;
  const { text } = resInfo?.cards[0]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="m-4 p-4 text-lg">
      <h1>{text}</h1>
      <h2 className="p-2">Menu</h2>
      <ul className="">
        {itemCards?.map((item) => (
          <li className="list-disc" key={item?.card?.info?.id}>
            {item?.card?.info?.name}: Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
