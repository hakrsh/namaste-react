const RestaurantCard = ({ resData }) => {
  const { name, image, rating, costText, cuisine } = resData?.info;
  return (
    <div className="res-card">
      <img src={image.url} className="food-img" />
      <h2>{name}</h2>
      <h3>{cuisine.map((c) => c.name).join(", ")}</h3>
      <h3>
        Rating {rating.aggregate_rating} {rating.rating_subtitle}
      </h3>
      <h3>{costText.text}</h3>
    </div>
  );
};

export default RestaurantCard;
