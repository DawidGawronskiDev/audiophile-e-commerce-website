import LogoImage from "/assets/shared/desktop/logo.svg";
import CartImage from "/assets/shared/desktop/icon-cart.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
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

const Header = () => {
  const { handleCartVisible } = useContext(ShopContext);

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-black-900">
      <div className="container-center flex justify-between py-8">
        <img src={LogoImage} alt="Audiophile Logo" />
        <nav className="hidden tablet:block">
          <NavLinks />
        </nav>
        <button>
          <img src={CartImage} alt="Cart" onClick={handleCartVisible} />
        </button>
      </div>
    </header>
  );
};

export default Header;
