import { useState } from "react";

import QuantityButton from "./QuantityButton";

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

export default Product;
