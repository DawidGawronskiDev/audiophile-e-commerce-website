import LogoImage from "/assets/shared/desktop/logo.svg";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavLinks from "./NavLinks";
import CartButton from "./CartButton";

import HamburgerIcon from "/assets/shared/tablet/icon-hamburger.svg";
import Categories from "../shared/Categories/Categories";

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
          <div className="pt-16 pb-8 bg-white-900">
            <Categories />
          </div>
          <div className="fixed w-[100dvw] h-[100dvh] bg-black-900/25"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
