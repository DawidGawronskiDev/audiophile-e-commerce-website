/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ButtonOrange } from "../Buttons";
import { ShopContext } from "../../App";

import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, cartVisible } = useContext(ShopContext);

  return (
    <div className={`${cartVisible ? `block` : `hidden`}`}>
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 container-center w-full h-[calc(100dvh_-_90px)] mt-[90px] tablet:grid items-start justify-items-end">
        <div className="z-40 bg-white-900 p-2 mobile:p-6 rounded-lg grid gap-8 my-8 tablet:w-[377px]">
          <div className="flex">
            <h6 className="flex-1">
              Cart (
              {cartItems.reduce((acc, val) => {
                acc += val.quantity;
                return acc;
              }, 0)}
              )
            </h6>
            <button className="text-black-900/50">Remove All</button>
          </div>
          <ul className="grid gap-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="flex">
            <span className="flex-1 uppercase">Total</span>
            <h6>
              &#36;{" "}
              {cartItems.reduce((acc, val) => {
                acc += val.quantity * val.price;
                return acc;
              }, 0)}
            </h6>
          </div>
          <ButtonOrange text={"Go to checkout"} link={"/checkout"} />
        </div>
      </div>
      <div className="fixed z-40 top-0 left-0 bg-black-900/25 w-[100dvw] h-[100dvh]"></div>
    </div>
  );
};

export default Cart;
