import { Link } from "react-router-dom";

const ButtonOrange = ({ text, link }) => {
  return (
    <button
      style={defaultStyling}
      className="text-white-900 bg-orange-900 hover:bg-orange-800 transition"
    >
      <Link>{text}</Link>
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

export { ButtonOrange };
