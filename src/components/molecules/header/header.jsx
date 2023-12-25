import SWIGGY_LOGO from "../../../../assets/swiggy-logo.png";
import ACCOUNT from "../../../../assets/Account.png";
import DISCOUNT from "../../../../assets/Discount.png";
import LIFEBUOY from "../../../../assets/Lifebuoy.png";
import SEARCH from "../../../../assets/Search.png";
import SHOPPING_CART from "../../../../assets/Shopping cart.png";
import HOVER_ACCOUNT from "../../../../assets/Account-1.png";
import HOVER_DISCOUNT from "../../../../assets/Discount-1.png";
import HOVER_LIFEBUOY from "../../../../assets/Lifebuoy-1.png";
import HOVER_SEARCH from "../../../../assets/Search-1.png";
import HOVER_SHOPPING_CART from "../../../../assets/Shopping cart-1.png";
import DOWN_ARROW_PRIMARY from "../../../../assets/down-arrow-1.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <figure className="logo">
            <img src={SWIGGY_LOGO} alt="swiggy logo" />
          </figure>
          <div className="location-section">
            <button id="other-button">Other</button>
            <p className="location">Thoppampatti Pirivu, K.Vadamadurai, ...</p>
            <button id="location-dropdown">
              <figure className="drop-down-icon">
                <img src={DOWN_ARROW_PRIMARY} alt="drop down" />
              </figure>
            </button>
          </div>
        </div>
        <nav className="nav-section">
          <button className="nav-button">
            <div className="icon-container">
              <figure className="nav-icon">
                <img src={SEARCH} alt="search icon" />
              </figure>
              <figure className="nav-icon icon-hover">
                <img src={HOVER_SEARCH} alt="search icon" />
              </figure>
            </div>
            <p className="nav-text">Search</p>
          </button>
          <button className="nav-button">
            <div className="icon-container">
              <figure className="nav-icon">
                <img src={DISCOUNT} alt="offer icon" />
              </figure>
              <figure className="nav-icon icon-hover">
                <img src={HOVER_DISCOUNT} alt="offer icon" />
              </figure>
            </div>
            <p className="nav-text">
              Offers<sup className="super-script">NEW</sup>
            </p>
          </button>
          <button className="nav-button">
            <div className="icon-container">
              <figure className="nav-icon">
                <img src={LIFEBUOY} alt="offer icon" />
              </figure>
              <figure className="nav-icon icon-hover">
                <img src={HOVER_LIFEBUOY} alt="offer icon" />
              </figure>
            </div>
            <p className="nav-text">Help</p>
          </button>
          <button className="nav-button">
            <div className="icon-container">
              <figure className="nav-icon">
                <img src={ACCOUNT} alt="offer icon" />
              </figure>
              <figure className="nav-icon icon-hover">
                <img src={HOVER_ACCOUNT} alt="offer icon" />
              </figure>
            </div>
            <p className="nav-text">Sign In</p>
          </button>
          <button className="nav-button">
            <div className="icon-container">
              <figure className="nav-icon">
                <img src={SHOPPING_CART} alt="offer icon" />
              </figure>
              <figure className="nav-icon icon-hover">
                <img src={HOVER_SHOPPING_CART} alt="offer icon" />
              </figure>
            </div>
            <p className="nav-text">Cart</p>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
