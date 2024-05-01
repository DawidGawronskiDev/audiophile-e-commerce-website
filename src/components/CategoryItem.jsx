import { Link } from "react-router-dom";

const CategoryItem = ({ image, label, link }) => {
  return (
    <li className="w-full bg-slate-100 relative flex flex-col gap-4 items-center justify-center pb-4">
      <img
        src={image}
        alt={`Image of ${label}`}
        className="-translate-y-1/4 w-28 sm:w-2/3"
      />
      <h3 className="font-bold text-base tracking-wide uppercase">{label}</h3>
      <button className="font-bold text-sm uppercase opacity-50">
        <Link to={link}>Shop</Link>
      </button>
    </li>
  );
};

export default CategoryItem;
