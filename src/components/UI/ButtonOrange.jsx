import { Link } from "react-router-dom";

const ButtonOrange = ({ children, link, ...props }) => {
  return (
    <button className="bg-orange-600 px-8 py-4 uppercase text-sm font-bold text-white">
      <Link to={link} {...props}>
        {children}
      </Link>
    </button>
  );
};

export default ButtonOrange;
