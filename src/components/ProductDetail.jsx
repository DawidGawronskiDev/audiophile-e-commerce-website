import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Overline from "./UI/Overline";
import Body from "./UI/Body";
import HeadingL from "./UI/HeadingL";
import ProductImage from "./ProductImage";
import Price from "./UI/Price";
import AddToCart from "./UI/AddToCart";
import ProductFeatures from "./ProductFeatures";
import ProductIncludes from "./ProductIncludes";

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
      <div className="m-6 grid gap-8">
        <ProductImage product={product} />
        <div className="grid gap-6">
          {product.new && <Overline orange>New Product</Overline>}
          <HeadingL>{product.name}</HeadingL>
          <Body>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </Body>
        </div>
        <Price price={product.price} />
        <AddToCart product={product} />
      </div>
      <ProductFeatures features={product.features} />
      <ProductIncludes includes={product.includes} />
    </>
  );
};

export default ProductDetail;
