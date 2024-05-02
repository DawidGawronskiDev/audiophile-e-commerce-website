import HamburgerIcon from "../assets/shared/tablet/icon-hamburger.svg";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import LogoImage from "../assets/shared/desktop/logo.svg";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openCart = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white">
      <header className="px-6 py-8 bg-black text-white flex items-center justify-between h-24 sm:gap-12">
        <div className="w-full bg-black text-white flex items-center justify-between h-24 sm:gap-12 max-w-5xl lg:mx-auto">
          <button onClick={handleMenu} className="lg:hidden">
            <img src={HamburgerIcon} alt="Menu" />
          </button>
          <Link to="/" className="sm:flex-1 lg:flex-none">
            <img src={LogoImage} alt="Logo" />
          </Link>
          <ul className="flex items-start justify-center gap-8 uppercase font-bold text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Headphones</Link>
            </li>
            <li>
              <Link to="/">Speakers</Link>
            </li>
            <li>
              <Link to="/">Earphones</Link>
            </li>
          </ul>
          <button onClick={openCart}>
            <img src={CartIcon} alt="Cart" />
          </button>
        </div>
      </header>
      {showMenu && (
        <div className="h-screen overflow-y-auto py-24 block md:hidden">
          <CategoryList />
        </div>
      )}
    </div>
  );
};

export default Header;
