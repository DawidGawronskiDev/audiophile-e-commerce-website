import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
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
