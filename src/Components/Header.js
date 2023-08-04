import Logo from "../Asset/image/FoodShood.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="HeaderComp" key="HeaderComp">
        <div className="img-logo ">
          <img className="img-logo " alt="logo" src={Logo} />
        </div>

        <div className="menu">
          <ul className="my-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>

        <button className="loginButton">Login</button>
      </div>
    </>
  );
};

export default Header;
