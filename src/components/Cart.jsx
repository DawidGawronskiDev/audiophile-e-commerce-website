import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import { cartActions } from "../store/cartSlice";
import HeadingXXS from "./UI/HeadingXXS";

const Cart = () => {
  const { isCartVisible, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemsQuantity = items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const onClose = () => {
    dispatch(cartActions.hideCart());
  };

  return (
    <Modal open={isCartVisible} onClose={() => onClose()}>
      <HeadingXXS>Cart ({itemsQuantity})</HeadingXXS>
    </Modal>
  );
};

export default Cart;
