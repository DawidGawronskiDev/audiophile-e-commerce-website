/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";

import Categories from "../../shared/Categories/Categories";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Footer from "../../shared/Footer/Footer";

import Products from "./Products";

async function loader(params) {
  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return { data, category: params.params.category };
    } catch (err) {
      console.log(err);
    }
  };

  return fetchData();
}

const CategoryPage = ({ category }) => {
  const loaderData = useLoaderData();
  const products = loaderData.data.filter(
    (product) => product.category === loaderData.category
  );

  return (
    <>
      <Hero title={loaderData.category} />
      <Products products={products} />
      <Categories />
      <Testimonial />
    </>
  );
};

export default CategoryPage;
export { loader };
