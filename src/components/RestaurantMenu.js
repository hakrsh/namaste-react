import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Accordion from "./Accordion";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState({ index: null, toggle: false });
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
      {categories.map((category, index) => {
        const card = category?.card?.card;
        return (
          <Accordion
            key={card.title}
            data={card}
            showItems={index === showItem.index && showItem.toggle}
            setShowIndex={() =>
              setShowItem({
                index: index,
                toggle: index !== showItem.index || !showItem.toggle,
              })
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
