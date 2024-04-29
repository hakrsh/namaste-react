const ProductCard = ({ product }) => {
  const { title, thumbnail, rating, price, category } = product;
  return (
    <div className="res-card">
      <img src={thumbnail} className="food-img" />
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h3>
        Rating {rating}
      </h3>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;


