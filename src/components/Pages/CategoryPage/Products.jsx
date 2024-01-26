import { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
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
        const fetchedProducts = response.filter(
          (product) => product.category === category
        );
        setProducts(fetchedProducts);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="container-center">
      <ul className="grid gap-32">
        {products &&
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Products;
