import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <ul className="flex gap-8 text-white-900">
      <NavLink name={"Home"} link={"/"} />
      <NavLink name={"Headphones"} link={`/category/headphones`} />
      <NavLink name={"Speakers"} link={`/category/speakers`} />
      <NavLink name={"Earphones"} link={`/category/earphones`} />
    </ul>
  );
};

export default NavLinks;
