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

export default NavLink;
