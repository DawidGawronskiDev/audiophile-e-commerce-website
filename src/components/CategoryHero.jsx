import React from "react";
import HeadingL from "./UI/HeadingL";

const CategoryHero = ({ children }) => {
  return (
    <div className="bg-black text-white py-8 text-center">
      <HeadingL>{children}</HeadingL>
    </div>
  );
};

export default CategoryHero;
