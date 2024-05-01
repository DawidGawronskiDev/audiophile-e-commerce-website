import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import { cartActions } from "../store/cartSlice";
import HeadingXXS from "./UI/HeadingXXS";
import Price from "./UI/Price";
import CartList from "./CartList";

const Cart = () => {
  const { isCartVisible, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemsQuantity = items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const totalPrice = items.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  const onClose = () => {
    dispatch(cartActions.hideCart());
  };

  const handleRemoveAll = () => {
    dispatch(cartActions.hideCart());
    dispatch(cartActions.removeAll());
  };

  return (
    <Modal open={isCartVisible} onClose={() => onClose()}>
      <div className="grid gap-8">
        <div className="flex justify-between items-center">
          <HeadingXXS>Cart ({itemsQuantity})</HeadingXXS>
          <button
            onClick={handleRemoveAll}
            className="font-medium text-base leading-6 underline opacity-50"
          >
            Remove All
          </button>
        </div>
        <CartList items={items} />
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm leading-6 opacity-50">
            TOTAL
          </span>
          <Price price={totalPrice} />
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
