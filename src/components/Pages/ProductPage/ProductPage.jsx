/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import Categories from "../../shared/Categories/Categories";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Footer from "../../shared/Footer/Footer";

import Product from "./Product";
import Features from "./Features";
import Content from "./Content";
import Gallery from "./Gallery";
import Others from "./Others";

async function loader(params) {
  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return { data, slug: params.params.slug };
    } catch (err) {
      console.log(err);
    }
  };

  return fetchData();
}

const ProductPage = () => {
  const loaderData = useLoaderData();

  const product = loaderData.data.find(
    (product) => product.slug === loaderData.slug
  );

  return (
    <>
      <div className="mt-[90px]"></div>
      <Product product={product} />
      <Features product={product} />
      <Content product={product} />
      <Gallery product={product} />
      <Others product={product} />
      <Categories />
      <Testimonial />
    </>
  );
};

export default ProductPage;
export { loader };
