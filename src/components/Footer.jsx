import { Link } from "react-router-dom";

import LogoImage from "/src/assets/shared/desktop/logo.svg";
import FacebookImage from "/src/assets/shared/desktop/icon-facebook.svg";
import TwitterImage from "/src/assets/shared/desktop/icon-twitter.svg";
import InstagramImage from "/src/assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="px-6 py-8 bg-black text-white grid justify-items-center gap-12 text-center">
      <img src={LogoImage} alt="Logo" />
      <ul className="grid gap-4 uppercase text-sm font-bold">
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
      <p className="font-medium font-base leading-relaxed opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="font-bold text-base opacity-50">
        Copyright 2021. All Rights Reserved
      </p>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link to="/">
            <img src={FacebookImage} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={TwitterImage} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={InstagramImage} alt="Instagram" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
