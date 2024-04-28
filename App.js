import React from "react";
import ReactDOM from "react-dom/client";
import { ResData } from "./data";

const Header = () => (
  <div className="header">
    <div>
      <img
        src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
        className="logo"
      />
    </div>
    <div className="nav">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const RestaurantCard = ({resData}) => {
    const {name,image,rating,costText,cuisine} = resData?.info;
    return (   
        <div className="res-card">
          <img
            src={image.url}
            className="food-img"
          />
          <h2>{name}</h2>
          <h3>{cuisine.map(c=>c.name).join(', ')}</h3>
          <h3>Rating {rating.aggregate_rating} {rating.rating_subtitle}</h3>
          <h3>{costText.text}</h3>
          
        </div>
      );
}
const Search = () => <div className="search">Search</div>;
const ResCardContainer = () => (
  <div className="res-container">
    {ResData.map(data => <RestaurantCard key={data.info.resId} resData={data}/>)}
  </div>
);
const Body = () => (
  <div className="body">
    <Search />
    <ResCardContainer />
  </div>
);
const Main = () => (
  <>
    <Header />
    <Body />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
