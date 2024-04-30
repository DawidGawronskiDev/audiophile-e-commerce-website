const Body = ({ children, color = "black" }) => {
  let cssClass = "font-medium text-base leading-7";

  cssClass += ` text-${color}/50`;

  return <p className={cssClass}>{children}</p>;
};

export default Body;
