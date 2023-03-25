import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import Search from './Search';
function Header() {
  return (
    <div className="header">
      <div className="conteiner">
        <Link to="/">
          <div className="header-logo">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/26_App_Store_logo_logos-512.png"
              alt=""
              width="48"
            />
            <div className="header-logo-text">
              <h1>TECHNOMAX</h1>
              <p>Online store</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header-cart">
          <Link to="cart" className="button button-cart">
            <span className="cart-price">520 $</span>
            <div className="button__delimiter">
              <img
                src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/shopping-cart-512.png"
                alt=""
                width={35}
              />
            </div>
            <span className="cart-items-number">3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
