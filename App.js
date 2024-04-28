import React from "react";
import ReactDOM from "react-dom/client";

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
const RestaurantCard = () => (
  <div className="res-card">
    <img
      src="https://assets-global.website-files.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg"
      className="food-img"
    />
    <h2>Icecream</h2>
    <h3>4.4 stars</h3>
    <h3>15 minuts</h3>
  </div>
);
const Search = () => <div className="search">Search</div>;
const ResCardContainer = () => (
  <div className="res-container">
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
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
