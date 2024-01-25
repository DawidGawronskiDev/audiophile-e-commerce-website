import Item from "./Item";

const Content = ({ product }) => {
  return (
    <div className="container-center w-full">
      <div className="grid gap-6 tablet:grid-cols-2">
        <h3>In the box</h3>
        <ul className="grid gap-2">
          {product.includes.map((item, key) => (
            <Item item={item} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
