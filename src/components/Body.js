import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  // Whenever state variables updates, react trigger a reconcilation cycle(re-render the component)
  console.log("Body Rendered!");
  const [listOfProducts, setListOfProducts] = useState([]); // array destructuring
  const [listOfFilteredProdcuts, setListOfFilteredProdcuts] = useState([]);
  const [searchText, setSearchText] = useState("");
  // useEffect takes 2 arguments, a callback function and a an optional dependecy array
  // if no dependency array => useEffect is callled on every render of the component
  // if dependency array is [] => useEffect is callled once (on initial render)
  // if dependency array is not empty => useEffect is callled every time the dependency updates
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("fetching data");
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setListOfProducts(data?.products);
    setListOfFilteredProdcuts(data?.products);
  };
  // Conditional rendering
  return !listOfProducts.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setListOfFilteredProdcuts(
                listOfProducts.filter((product) =>
                  product.title.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() =>
            setListOfFilteredProdcuts(
              listOfFilteredProdcuts.filter((product) => product.rating > 4.5)
            )
          }
        >
          Top rated products
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredProdcuts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
