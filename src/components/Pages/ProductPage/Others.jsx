import OtherItem from "./OtherItem";

const Others = ({ product }) => {
  return (
    <div className="container-center grid gap-8">
      <h3 className="text-center">You may also like</h3>
      <ul className="grid gap-8">
        {product.others.map((item, index) => (
          <OtherItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Others;
