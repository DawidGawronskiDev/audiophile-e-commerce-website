import React from "react";

const CategoryHero = ({ children }) => {
  return (
    <div className="bg-black text-white py-8 text-center">
      <h2 className="font-bold text-3xl tracking-wide uppercase">{children}</h2>
    </div>
  );
};

export default CategoryHero;
