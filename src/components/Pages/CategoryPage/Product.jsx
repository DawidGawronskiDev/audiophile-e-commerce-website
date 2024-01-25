import { ButtonOrange } from "../../shared/Buttons";

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

export default Product;
