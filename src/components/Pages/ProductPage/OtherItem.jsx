import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const OtherItem = ({ item }) => {
  const loaderData = useLoaderData();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const fetchedProduct = response.find(
          (product) => product.slug === item.slug
        );
        setProduct(fetchedProduct);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [loaderData.slug]);

  if (product) {
    return (
      <li>
        <Link
          to={`/category/${product.category}/product/${product.slug}`}
          className="grid gap-4"
        >
          <div className="bg-grey-900 aspect-video rounded-lg grid items-center">
            <picture className="grid items-center justify-items-center">
              <source src={product.image.mobile} media="(max-width: 375px)" />
              <source src={product.image.tablet} media="(max-width: 768px)" />
              <source src={product.image.desktop} media="(max-width: 1440px)" />
              <img src={product.image.desktop} alt="" className="w-1/2" />
            </picture>
          </div>
          <h5 className="text-center">{product.name}</h5>
        </Link>
      </li>
    );
  }
};

export default OtherItem;
