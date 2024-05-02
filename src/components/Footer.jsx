import { Link } from "react-router-dom";

import LogoImage from "/src/assets/shared/desktop/logo.svg";
import FacebookImage from "/src/assets/shared/desktop/icon-facebook.svg";
import TwitterImage from "/src/assets/shared/desktop/icon-twitter.svg";
import InstagramImage from "/src/assets/shared/desktop/icon-instagram.svg";
import Body from "./UI/Body";
import Navigation from "./UI/Navigation";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="px-6 py-8 text-white grid justify-items-center gap-12 sm:justify-items-start max-w-5xl lg:mx-auto">
        <img src={LogoImage} alt="Logo" />
        <ul className="gap-4 uppercase text-sm font-bold flex flex-col items-center sm:flex-row sm:gap-8">
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
        <Body color="white">
          <span className="text-center md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </span>
        </Body>
        <div className="flex flex-col gap-8 items-start sm:flex-row sm:justify-between w-full">
          <p className="font-bold text-base opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
