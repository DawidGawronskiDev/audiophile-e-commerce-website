import CartItem from "./CartItem";

const CartList = ({ items = [] }) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span>Cart is empty.</span>
      )}
    </ul>
  );
};

export default CartList;
