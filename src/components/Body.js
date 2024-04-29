import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]); // array destructuring
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json()
    setListOfProducts(data?.products)
  };
  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() =>
            setListOfProducts(
              listOfProducts.filter(
                (product) => product.rating > 4.5
              )
            )
          }
        >
          Top rated products
        </button>
      </div>
      <div className="res-container">
        {listOfProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
