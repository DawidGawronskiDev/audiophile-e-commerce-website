/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";

import { ButtonOrange } from "../../shared/Buttons";
import Categories from "../../shared/Categories/Categories";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Footer from "../../shared/Footer/Footer";

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

const Product = ({ product }) => {
  return (
    <li className="flex flex-col gap-8 desktop:flex-row desktop:even:flex-row-reverse">
      <div className="overflow-hidden rounded-lg aspect-square bg-grey-900 tablet:aspect-video tablet:grid tablet:items-center desktop:aspect-square">
        <picture className="flex justify-center">
          <source
            src={product.categoryImage.desktop}
            media="(max-width: 1440px)"
          />
          <source
            src={product.categoryImage.tablet}
            media="(max-width: 768px)"
          />
          <source
            src={product.categoryImage.mobile}
            media="(max-width: 375px)"
          />
          <img
            src={product.categoryImage.desktop}
            alt=""
            className="w-full tablet:w-1/3 desktop:w-3/4"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center text-center gap-6 desktop:justify-center desktop:items-start desktop:text-left desktop:w-full desktop:max-w-[50%]">
        {product.new && (
          <span className="text-overline text-orange-900">New product</span>
        )}
        <h2>{product.name}</h2>
        <span className="body opacity-50 desktop:max-w-[445px]">
          {product.description}
        </span>
        <ButtonOrange text={"See product"} link={`product/${product.slug}`} />
      </div>
    </li>
  );
};

const Products = ({ products }) => {
  return (
    <div className="container-center">
      <ul className="grid gap-32">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </ul>
    </div>
  );
};

const CategoryPage = ({ category }) => {
  const loaderData = useLoaderData();
  const products = loaderData.data.filter(
    (product) => product.category === loaderData.category
  );
  console.log(products);

  return (
    <>
      <Header />
      <div className="mt-[90px]"></div>
      <div className="grid gap-32">
        <Hero title={loaderData.category} />
        <Products products={products} />
        <Categories />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;
export { loader };
