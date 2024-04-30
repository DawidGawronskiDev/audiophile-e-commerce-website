import { Link } from "react-router-dom";

const ButtonOrange = ({ children, link }) => {
  return (
    <button className="bg-orange-600 px-8 py-4 uppercase text-sm font-bold m-auto text-white">
      <Link to={link}>{children}</Link>
    </button>
  );
};

export default ButtonOrange;
