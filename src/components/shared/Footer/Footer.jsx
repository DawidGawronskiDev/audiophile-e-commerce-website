import LogoImage from "/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

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
  return (
    <ul className="flex flex-col tablet:flex-row items-center gap-4 tablet:gap-8 text-white-900">
      <NavLink name={"Home"} link={"/"} /> {/* Corrected prop name to "link" */}
      <NavLink name={"Headphones"} link={"/category/headphones"} />
      <NavLink name={"Speakers"} link={"/category/speakers"} />
      <NavLink name={"Earphones"} link={"/category/earphones"} />
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black-900">
      <div className="container-center py-8 grid gap-10 justify-items-center tablet:grid tablet:grid-cols-2 tablet:justify-items-start">
        <img src={LogoImage} alt="Audiophile Logo" />
        <nav className="tablet:col-start-1 tablet:col-end-3 desktop:col-start-2 desktop:justify-self-end">
          <NavLinks />
        </nav>
        <span className="text-white-900/50 text-center tablet:text-left tablet:col-start-1 tablet:col-end-3 desktop:col-end-2">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </span>
        <span className="text-white-900/50 text-[15px] font-bold">
          Copyright 2021. All Rights Reserved
        </span>
        <nav className="tablet:justify-self-end desktop:col-start-2 desktop:col-end-3 desktop:row-start-2 desktop-row-end-2 desktop:self-end">
          <ul className="flex gap-4">
            <li>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="Facebook"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="Twitter"
                />
              </Link>
            </li>
            <li>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="Instagram"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
