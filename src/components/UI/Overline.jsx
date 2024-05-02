const Overline = ({ children, orange = false }) => {
  let cssClass = "font-normal text-sm leading-none tracking-widest uppercase";

  orange ? (cssClass += " text-orange-600") : (cssClass += " text-white/50");

  return <div className={cssClass}>{children}</div>;
};

export default Overline;
