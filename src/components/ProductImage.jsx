/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ProductImage = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (product) {
      setImageSrc("http://localhost:3000" + product.image.mobile);
    }
  }, [product]);

  return (
    <img
      src={imageSrc}
      alt={`Image of ${product.name}`}
      className="rounded-lg"
    />
  );
};

export default ProductImage;
