/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";

import { ButtonOrange } from "../../shared/Buttons";

function loader() {
  const data = fetch("data.json").then((res) => res.json());

  return data;
}

const Product = ({ product }) => {
  return (
    <li className="grid gap-8">
      <picture className="rounded-lg">
        <source
          src={product.categoryImage.desktop}
          media="(max-width: 1440px)"
        />
        <source src={product.categoryImage.tablet} media="(max-width: 768px)" />
        <source src={product.categoryImage.mobile} media="(max-width: 375px)" />
        <img src={product.categoryImage.desktop} alt="" />
      </picture>
      <div className="flex flex-col items-center text-center gap-6">
        {product.new && (
          <span className="text-overline text-orange-900">New product</span>
        )}
        <h2>{product.name}</h2>
        <span className="body opacity-50">{product.description}</span>
        <ButtonOrange text={"See product"} />
      </div>
    </li>
  );
};

const CategoryPage = ({ category }) => {
  const data = useLoaderData();
  const products = data.filter((product) => product.category === category);
  console.log(products);

  return (
    <>
      <Header />
      <Hero title={category} />
      <div className="container-center">
        <ul className="grid gap-32">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryPage;
export { loader };
