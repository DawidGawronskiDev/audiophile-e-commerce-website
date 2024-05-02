/* eslint-disable react/prop-types */
import Overline from "../UI/Overline";
import HeadingL from "../UI/HeadingL";
import Body from "../UI/Body";
import ButtonOrange from "../UI/ButtonOrange";
import ProductImage from "../ProductImage";
import DynamicImage from "../UI/DynamicImage";

const ProductItem = ({ product }) => {
  return (
    <li className="gap-8 flex flex-col justify-center items-center lg:flex-row lg:*:flex-1 lg:gap-32 lg:even:flex-row-reverse">
      <div>
        <DynamicImage
          mobile={`http://localhost:3000${product.categoryImage.mobile}`}
          tablet={`http://localhost:3000${product.categoryImage.tablet}`}
          desktop={`http://localhost:3000${product.categoryImage.desktop}`}
        />
      </div>
      <div className="gap-6 flex flex-col justify-center items-center text-center sm:max-w-xl lg:text-left lg:items-start">
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
