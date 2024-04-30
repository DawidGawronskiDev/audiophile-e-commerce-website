import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ type }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch("src/data.json");

        if (!response.ok) {
          throw json({ message: "Failed to fetch products" });
        }

        const responseData = await response.json();

        const products = responseData.filter(
          (product) => product.category === type,
        );

        setProducts(products);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="mx-6 grid gap-32">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ul>
  );
};

export default ProductList;
