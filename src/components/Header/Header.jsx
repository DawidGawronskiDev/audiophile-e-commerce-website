import LogoImage from "/assets/shared/desktop/logo.svg";
import CartImage from "/assets/shared/desktop/icon-cart.svg";

import { Link } from "react-router-dom";

const NavLink = ({ name }) => {
  return (
    <li>
      <Link to={"/"} className="sub-title hover:text-orange-800 transition">
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
  return (
    <header className="bg-black-900">
      <div className="container-center flex justify-between py-8">
        <img src={LogoImage} alt="Audiophile Logo" />
        <nav>
          <NavLinks />
        </nav>
        <button>
          <img src={CartImage} alt="Cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
