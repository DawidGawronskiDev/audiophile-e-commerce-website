import HamburgerIcon from "../assets/shared/tablet/icon-hamburger.svg";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import LogoImage from "../assets/shared/desktop/logo.svg";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
      <header className="px-6 py-8 bg-black text-white flex items-center justify-between h-24">
        <button onClick={handleMenu}>
          <img src={HamburgerIcon} alt="Menu" />
        </button>
        <img src={LogoImage} alt="Logo" />
        <button onClick={openCart}>
          <img src={CartIcon} alt="Cart" />
        </button>
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
