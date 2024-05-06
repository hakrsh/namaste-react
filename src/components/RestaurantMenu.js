import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantInfo(restaurantId);
  if (!resInfo?.cards?.length) return <Shimmer />;
  const { text } = resInfo?.cards[0]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="m-4 p-4 text-lg">
      <h1 className="text-center text-lg font-bold">{text}</h1>
      {categories.map((category) => {
        console.log(category.card.card);
        const card = category?.card?.card;
        return <Accordion key={card.title} data={card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
