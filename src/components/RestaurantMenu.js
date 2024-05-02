import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API, X_CORS_API_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { restaurantId } = useParams();
  const fetchMenu = async () => {
    console.log("fetching restuarant info....");
    const res = await fetch(RESTAURANT_MENU_API + restaurantId, {
      headers: {
        "x-cors-api-key": X_CORS_API_KEY,
      },
    });
    const data = await res.json();
    setResInfo(data?.data);
    console.log(resInfo);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo?.cards?.length) return <Shimmer />;
  const { text } = resInfo?.cards[0]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      <h1>{text}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}: Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
