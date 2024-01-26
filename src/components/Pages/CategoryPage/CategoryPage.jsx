/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Hero from "../../Hero/Hero";

import Categories from "../../shared/Categories/Categories";
import Testimonial from "../../shared/Testimonial/Testimonial";

import Products from "./Products";

async function loader(response) {
  return response.params.category;
}

const CategoryPage = () => {
  const category = useLoaderData();

  return (
    <>
      <Hero title={category} />
      <Products category={category} />
      <Categories />
      <Testimonial />
    </>
  );
};

export default CategoryPage;
export { loader };
