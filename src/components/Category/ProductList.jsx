import ProductItem from "./ProductItem";
import useFetch from "../../hooks/useFetch";

const ProductList = ({ type }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/v1/category/${type}`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="mx-6 grid gap-32  max-w-5xl lg:mx-auto">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ul>
  );
};

export default ProductList;
