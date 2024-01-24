import LogoImage from "/assets/shared/desktop/logo.svg";
import CartImage from "/assets/shared/desktop/icon-cart.svg";

import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../App";

import HamburgerIcon from "/assets/shared/tablet/icon-hamburger.svg";
import Categories from "../shared/Categories/Categories";

const NavLink = ({ name, link }) => {
  return (
    <li>
      <Link to={link} className="sub-title hover:text-orange-800 transition">
        {name}
      </Link>
    </li>
  );
};

const NavLinks = () => {
  // `/category/${String(name).toLowerCase()`
  return (
    <ul className="flex gap-8 text-white-900">
      <NavLink name={"Home"} link={"/"} />
      <NavLink name={"Headphones"} link={`/category/headphones`} />
      <NavLink name={"Speakers"} link={`/category/speakers`} />
      <NavLink name={"Earphones"} link={`/category/earphones`} />
    </ul>
  );
};

const CartButton = () => {
  const { cartItems, cartVisible, handleCartVisible } = useContext(ShopContext);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount && !cartVisible) {
      setCartUpdated(true);
    }
  }, [cartItems]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <button
      className="relative"
      onClick={() => {
        handleCartVisible();
        setCartUpdated(false);
      }}
    >
      <span
        className={`absolute flex h-3 w-3 bottom-0 -right-1 ${
          cartUpdated ? `block` : `hidden`
        }`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-900 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-900"></span>
      </span>
      <img src={CartImage} alt="Cart" />
    </button>
  );
};

const Header = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    setMenuVisible(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full bg-black-900">
        <div className="container-center h-[90px] flex justify-between py-8">
          <button className="tablet:hidden" onClick={handleMenuVisible}>
            <img src={HamburgerIcon} alt="Menu" />
          </button>
          <Link to={"/"}>
            <button>
              <img src={LogoImage} alt="Audiophile Logo" />
            </button>
          </Link>
          <nav className="hidden tablet:block">
            <NavLinks />
          </nav>
          <CartButton />
        </div>
        <div className={`tablet:hidden ${menuVisible ? `block` : `hidden`}`}>
          <div className="mt-[10px] pt-20 pb-8 bg-white-900">
            <Categories />
          </div>
          <div className="fixed w-[100dvw] h-[100dvh] bg-black-900/25"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
