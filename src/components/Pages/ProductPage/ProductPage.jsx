/* eslint-disable react/prop-types */
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import Categories from "../../shared/Categories/Categories";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Footer from "../../shared/Footer/Footer";
import { useContext, useState } from "react";
import { ShopContext } from "../../App";

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

const QuantityButton = ({ quantity, product, handleQuantity }) => {
  const { handleAddItem } = useContext(ShopContext);

  return (
    <div className="flex gap-4">
      <div className="flex font-bold text-black-900/25 bg-grey-900 *:aspect-square *:w-10 *:flex *:items-center *:justify-center *:cursor-pointer">
        <div
          onClick={() => {
            handleQuantity(-1);
          }}
        >
          <span>-</span>
        </div>
        <div>
          <span className="text-black-900">{quantity}</span>
        </div>
        <div
          onClick={() => {
            handleQuantity(1);
          }}
        >
          <span>+</span>
        </div>
      </div>
      <button
        className="flex-1 mobile:px-8 uppercase bg-orange-900 hover:bg-orange-800 transition"
        onClick={() => {
          handleAddItem(product, quantity);
        }}
      >
        <span className="font-bold text-[13px] tracking-[1px] text-white-900">
          Add to cart
        </span>
      </button>
    </div>
  );
};

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (val) => {
    if (quantity === 1 && val === -1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity + val);
    }
  };

  return (
    <div className="container-center">
      <div className="flex flex-col gap-8 tablet:gap-24 tablet:flex-row desktop:even:flex-row-reverse tablet:h-[480px]">
        <div className="overflow-hidden rounded-lg aspect-square bg-grey-900 tablet:grid tablet:items-center desktop:aspect-square">
          <picture className="flex justify-center">
            <source src={product.image.desktop} media="(max-width: 1440px)" />
            <source src={product.image.tablet} media="(max-width: 768px)" />
            <source src={product.image.mobile} media="(max-width: 375px)" />
            <img
              src={product.image.desktop}
              alt=""
              className="w-full tablet:w-3/4"
            />
          </picture>
        </div>
        <div className="flex flex-col items-left text-left gap-6 tablet:justify-center tablet:items-start desktop:w-full desktop:max-w-[50%]">
          {product.new && (
            <span className="text-overline text-orange-900">New product</span>
          )}
          <h2>{product.name}</h2>
          <span className="body opacity-50 tablet:max-w-[445px]">
            {product.description}
          </span>
          <h5>&#36; {product.price}</h5>
          <QuantityButton
            quantity={quantity}
            handleQuantity={handleQuantity}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

const Features = ({ product }) => {
  return (
    <div className="container-center">
      <div className="grid gap-6">
        <h3>Features</h3>
        <span className="body text-black-900/50">{product.features}</span>
      </div>
    </div>
  );
};

const Content = ({ product }) => {
  return (
    <div className="container-center w-full">
      <div className="grid gap-6 tablet:grid-cols-2">
        <h3>In the box</h3>
        <ul className="grid gap-2">
          {product.includes.map((item, key) => (
            <Item item={item} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li className="flex gap-6">
      <span className="body font-bold text-orange-900 w-6">
        {item.quantity}x
      </span>
      <span className="flex-1">{item.item}</span>
    </li>
  );
};

const Gallery = ({ product }) => {
  return (
    <div className="container-center grid gap-4 *:rounded-lg *:overflow-hidden mobile:grid-cols-2 tablet:h-[592px]">
      <picture>
        <source
          srcSet={product.gallery.first.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.first.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.first.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.first.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <picture>
        <source
          srcSet={product.gallery.second.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.second.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.second.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.second.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <picture className="mobile:col-start-2 mobile:col-end-3 mobile:row-start-1 mobile:row-end-3 object-cover">
        <source
          srcSet={product.gallery.third.desktop}
          media="(max-width: 1440px)"
        />
        <source
          srcSet={product.gallery.third.tablet}
          media="(max-width: 768px)"
        />
        <source
          srcSet={product.gallery.third.mobile}
          media="(max-width: 375px)"
        />
        <img
          src={product.gallery.third.desktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

const OtherItem = ({ item }) => {
  const loaderData = useLoaderData();

  const product = loaderData.data.find((product) => product.slug === item.slug);

  return (
    <li>
      <Link
        to={`/category/${product.category}/product/${product.slug}`}
        className="grid gap-4"
      >
        <div className="bg-grey-900 aspect-video rounded-lg grid items-center">
          <picture className="grid items-center justify-items-center">
            <source src={item.image.mobile} media="(max-width: 375px)" />
            <source src={item.image.tablet} media="(max-width: 768px)" />
            <source src={item.image.desktop} media="(max-width: 1440px)" />
            <img src={item.image.desktop} alt="" className="w-1/2" />
          </picture>
        </div>
        <h4 className="text-center">{item.name}</h4>
      </Link>
    </li>
  );
};

const Others = ({ product }) => {
  return (
    <div className="container-center grid gap-8">
      <h3 className="text-center">You may also like</h3>
      <ul className="grid gap-8">
        {product.others.map((item, index) => (
          <OtherItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ProductPage = () => {
  const loaderData = useLoaderData();

  const product = loaderData.data.find(
    (product) => product.slug === loaderData.slug
  );

  return (
    <>
      <div className="grid gap-32">
        <Header />
        <div className="mt-[90px]"></div>
        <Product product={product} />
        <Features product={product} />
        <Content product={product} />
        <Gallery product={product} />
        <Others product={product} />
        <Categories />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
export { loader };
