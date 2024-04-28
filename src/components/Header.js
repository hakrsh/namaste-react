import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div>
      <img src={LOGO_URL} className="logo" />
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

export default Header;