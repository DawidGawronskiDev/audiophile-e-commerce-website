/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ButtonOrange } from "../Buttons";
import { ShopContext } from "../../App";

const QuantityButton = ({ id, quantity }) => {
  const { handleItemQuantity } = useContext(ShopContext);

  return (
    <div className="flex gap-4">
      <div className="flex font-bold text-black-900/25 bg-grey-900 *:aspect-square *:text-[13px] *:w-8 *:flex *:items-center *:justify-center *:cursor-pointer">
        <div
          onClick={() => {
            handleItemQuantity(-1, id);
          }}
        >
          <span>-</span>
        </div>
        <div>
          <span className="text-black-900">{quantity}</span>
        </div>
        <div
          onClick={() => {
            handleItemQuantity(1, id);
          }}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item }) => {
  const name = item.name
    .split(" ")
    .reduce((acc, val) => {
      if (val.length < 5) {
        acc.push(val);
      }
      return acc;
    }, [])
    .join(" ");

  return (
    <li className="flex items-center gap-4 text-[15px]">
      <div className="w-16 aspect-square">
        <img src={item.image.mobile} alt="" className="rounded-lg " />
      </div>
      <div className="flex-1">
        <h6 className="leading-[25px]">{name}</h6>
        <span className="font-bold text-black-900/50 text-[14px] leading-[25px]">
          &#36; {item.price}
        </span>
      </div>
      <QuantityButton id={item.id} quantity={item.quantity} />
    </li>
  );
};

const Cart = () => {
  const { cartItems, cartVisible } = useContext(ShopContext);

  return (
    <div className={`${cartVisible ? `block` : `hidden`}`}>
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 container-center w-full h-[calc(100dvh_-_90px)] mt-[90px] tablet:grid items-start justify-items-end">
        <div className="z-40 bg-grey-900 p-2 mobile:p-6 rounded-lg grid gap-8 my-8 tablet:w-[377px]">
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
          <ButtonOrange text={"Go to checkout"} />
        </div>
      </div>
      <div className="fixed z-40 top-0 left-0 bg-black-900/25 w-[100dvw] h-[100dvh]"></div>
    </div>
  );
};

export default Cart;
