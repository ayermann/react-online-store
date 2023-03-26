import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import Search from './Search';
function Header() {
  return (
    <div className="header">
      <div className="conteiner">
        <Link to="/">
          <div className="header-logo">
            {/* <img src="/src/assets/images/logo.png" alt="" width="48" /> */}
            <div className="logo__image"></div>
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
              {/* <img src="../assets/images/cart.webp" alt="" width={35} /> */}
              <div className="cart__button__image"></div>
            </div>
            <span className="cart-items-number">3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
