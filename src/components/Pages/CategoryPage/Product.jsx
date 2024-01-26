import { ButtonOrange } from "../../shared/Buttons";

const Image = ({ categoryImage }) => {
  return (
    <picture className="grid items-center justify-items-center">
      <source src={categoryImage.mobile} media="(max-width: 375px)" />
      <source src={categoryImage.tablet} media="(max-width: 768px)" />
      <source src={categoryImage.desktop} media="(max-width: 1440px)" />
      <img
        src={categoryImage.desktop}
        alt=""
        className="mobile:w-1/2 desktop:w-[410px] translate-y-4"
      />
    </picture>
  );
};

const Product = ({ product }) => {
  return (
    <li className="flex flex-col gap-8 desktop:flex-row desktop:even:flex-row-reverse">
      <div className="flex-1 overflow-hidden rounded-lg aspect-square bg-grey-900 tablet:aspect-video grid items-center desktop:aspect-square">
        <picture className="grid items-center justify-items-center">
          <Image categoryImage={product.categoryImage} />
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

export default Product;
