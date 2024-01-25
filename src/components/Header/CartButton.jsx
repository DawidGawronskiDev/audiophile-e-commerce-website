import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../App";

import CartImage from "/assets/shared/desktop/icon-cart.svg";

const CartButton = () => {
  const { cartItems, cartVisible, handleCartVisible } = useContext(ShopContext);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount && !cartVisible) {
      setCartUpdated(true);
    }
  }, [cartItems]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <button
      className="relative"
      onClick={() => {
        handleCartVisible();
        setCartUpdated(false);
      }}
    >
      <span
        className={`absolute flex h-3 w-3 bottom-0 -right-1 ${
          cartUpdated ? `block` : `hidden`
        }`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-900 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-900"></span>
      </span>
      <img src={CartImage} alt="Cart" />
    </button>
  );
};

export default CartButton;
