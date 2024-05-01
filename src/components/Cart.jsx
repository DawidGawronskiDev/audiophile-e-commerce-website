import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import { cartActions } from "../store/cartSlice";
import HeadingXXS from "./UI/HeadingXXS";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartVisible, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemsQuantity = items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const onClose = () => {
    dispatch(cartActions.hideCart());
  };

  console.log(items);

  return (
    <Modal open={isCartVisible} onClose={() => onClose()}>
      <div className="grid gap-8">
        <HeadingXXS>Cart ({itemsQuantity})</HeadingXXS>
        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Cart;
