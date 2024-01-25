import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="container-center">
      <ul className="grid gap-32">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
