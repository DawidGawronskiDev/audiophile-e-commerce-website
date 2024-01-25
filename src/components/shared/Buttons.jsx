import { Link } from "react-router-dom";

const ButtonOrange = ({ text, link }) => {
  return (
    <Link to={link}>
      <button
        style={defaultStyling}
        className="text-white-900 bg-orange-900 hover:bg-orange-800 transition w-full"
      >
        {text}
      </button>
    </Link>
  );
};

const ButtonBlack = ({ text, link }) => {
  return (
    <Link to={link}>
      <button
        style={defaultStyling}
        className="text-white-900 bg-black-900 hover:bg-grey-700 transition w-full"
      >
        {text}
      </button>
    </Link>
  );
};

const ButtonTransparent = ({ text, link }) => {
  return (
    <Link to={link}>
      <button
        style={defaultStyling}
        className="text-black-900 hover:bg-black-900 hover:text-white-900 transition w-full  border-solid border-[1px] border-black-900"
      >
        {text}
      </button>
    </Link>
  );
};

const defaultStyling = {
  padding: "16px 32px",
  fontWeight: "bold",
  fontSize: "13px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const ButtonShop = ({ text, name }) => {
  return (
    <Link to={`/category/${String(name).toLowerCase()}`}>
      <button className="text-black-900/50 hover:text-orange-900 transition">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[13px] tracking-[1px] uppercase">
            {text}
          </span>
          <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </div>
      </button>
    </Link>
  );
};

export { ButtonOrange, ButtonBlack, ButtonTransparent, ButtonShop };
