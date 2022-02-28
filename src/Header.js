import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
function Header() {

    const [{ basket, user}, dispatch] = useStateValue();

    console.log(basket);

    const login = () => {
      if(user) {
        auth.signOut();
      }
    };

  return (
    <nav className="header">
      {/* left logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.imgur.com/GU0Tyne.png"
          alt="logo_img"
        />
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello {user?.email} </span>
            <span className="header_optionLineTwo">{!user ? "Sign In" : "Sign Out"}</span>
          </div>
        </Link>
      </div>

      {/* basket icon with number of products */}
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/* number of items in the basket */}
          <span className="header_optionLineTwo header_basketCount">
          {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
