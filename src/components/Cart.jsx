import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import { cartActions } from "../store/cartSlice";
import HeadingXXS from "./UI/HeadingXXS";

const Cart = () => {
  const { isCartVisible } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(cartActions.hideCart());
  };

  return (
    <Modal open={isCartVisible} onClose={() => onClose()}>
      <HeadingXXS>Cart (0)</HeadingXXS>
    </Modal>
  );
};

export default Cart;
