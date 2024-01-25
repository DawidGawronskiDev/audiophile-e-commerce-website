import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <ul className="flex flex-col tablet:flex-row items-center gap-4 tablet:gap-8 text-white-900">
      <NavLink name={"Home"} link={"/"} /> {/* Corrected prop name to "link" */}
      <NavLink name={"Headphones"} link={"/category/headphones"} />
      <NavLink name={"Speakers"} link={"/category/speakers"} />
      <NavLink name={"Earphones"} link={"/category/earphones"} />
    </ul>
  );
};

export default NavLinks;
