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
import { useEffect, useState } from "react";

async function loader(response) {
  return response.params;
}

const ProductPage = () => {
  const loaderData = useLoaderData();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const fetchedProduct = response.find(
          (product) => product.slug === loaderData.slug
        );
        setProduct(fetchedProduct);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [loaderData.slug]);

  if (product) {
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
  }
};

export default ProductPage;
export { loader };
