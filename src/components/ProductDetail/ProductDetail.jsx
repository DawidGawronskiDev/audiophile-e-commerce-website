import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Overline from "../UI/Overline";
import Body from "../UI/Body";
import HeadingL from "../UI/HeadingL";
import ProductImage from "../ProductImage";
import Price from "../UI/Price";
import AddToCart from "../UI/AddToCart";
import ProductFeatures from "./ProductFeatures";
import ProductIncludes from "./ProductIncludes";
import ProductGallery from "./ProductGallery";
import DynamicImage from "../UI/DynamicImage";

const ProductDetail = () => {
  const { slug } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/v1/product/${slug}`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div />
      <div className="m-6 flex gap-8 flex-col md:flex-row md:*:flex-1 md:gap-16">
        <div>
          <DynamicImage
            mobile={`http://localhost:3000${product.image.mobile}`}
            tablet={`http://localhost:3000${product.image.tablet}`}
            desktop={`http://localhost:3000${product.image.desktop}`}
          />
        </div>
        <div className="flex flex-col gap-6 md:justify-center md:items-start">
          {product.new && <Overline orange>New Product</Overline>}
          <HeadingL>{product.name}</HeadingL>
          <Body>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </Body>
          <Price price={product.price} />
          <AddToCart product={product} />
        </div>
      </div>
      <ProductFeatures features={product.features} />
      <ProductIncludes includes={product.includes} />
      <ProductGallery gallery={product.gallery} />
    </>
  );
};

export default ProductDetail;
