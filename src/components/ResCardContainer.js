import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const ResCardContainer = () => (
  <div className="res-container">
    {resData.map((data) => (
      <RestaurantCard key={data.info.resId} resData={data} />
    ))}
  </div>
);

export default ResCardContainer;
