import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
