import LogoImage from "/assets/shared/desktop/logo.svg";
import CartImage from "/assets/shared/desktop/icon-cart.svg";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../App";

const NavLink = ({ name }) => {
  return (
    <li>
      <Link
        to={`/category/${String(name).toLowerCase()}`}
        className="sub-title hover:text-orange-800 transition"
      >
        {name}
      </Link>
    </li>
  );
};

const NavLinks = () => {
  return (
    <ul className="flex gap-8 text-white-900">
      <NavLink name={"Home"} />
      <NavLink name={"Headphones"} />
      <NavLink name={"Speakers"} />
      <NavLink name={"Earphones"} />
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
  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-black-900">
      <div className="container-center h-[90px] flex justify-between py-8">
        <img src={LogoImage} alt="Audiophile Logo" />
        <nav className="hidden tablet:block">
          <NavLinks />
        </nav>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
