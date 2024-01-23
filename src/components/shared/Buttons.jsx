import { Link } from "react-router-dom";

const ButtonOrange = ({ text, link }) => {
  return (
    <button
      style={defaultStyling}
      className="text-white-900 bg-orange-900 hover:bg-orange-800 transition"
    >
      <Link to={link}>{text}</Link>
    </button>
  );
};

const defaultStyling = {
  padding: "16px 32px",
  fontWeight: "bold",
  fontSize: "13px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const ButtonShop = ({ text, link }) => {
  return (
    <button className="text-black-900/50 hover:text-orange-900 transition">
      <Link className="flex items-center gap-2">
        <span className="font-bold text-[13px] tracking-[1px] uppercase">
          {text}
        </span>
        <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
      </Link>
    </button>
  );
};

export { ButtonOrange, ButtonShop };
