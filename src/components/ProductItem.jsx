/* eslint-disable react/prop-types */
import Overline from "./UI/Overline";
import HeadingL from "./UI/HeadingL";
import Body from "./UI/Body";
import ButtonOrange from "./UI/ButtonOrange";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
  return (
    <li className="grid gap-8">
      <ProductImage product={product} />
      <div className="text-center grid gap-6">
        {product.new && <Overline orange>New Product</Overline>}
        <HeadingL>{product.name}</HeadingL>
        <Body>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Body>
        <ButtonOrange link={`/product/${product.slug}`}>
          See Product
        </ButtonOrange>
      </div>
    </li>
  );
};

export default ProductItem;
