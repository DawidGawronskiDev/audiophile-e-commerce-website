/* eslint-disable react/prop-types */
import { useState } from "react";
import { ButtonOrange } from "../Buttons";

const QuantityButton = ({ id, quantity, handleItemsQuantity }) => {
  return (
    <div className="flex gap-4">
      <div className="flex font-bold text-black-900/25 bg-grey-900 *:aspect-square *:text-[13px] *:w-8 *:flex *:items-center *:justify-center *:cursor-pointer">
        <div
          onClick={() => {
            handleItemsQuantity(-1, id);
          }}
        >
          <span>-</span>
        </div>
        <div>
          <span className="text-black-900">{quantity}</span>
        </div>
        <div
          onClick={() => {
            handleItemsQuantity(1, id);
          }}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, handleItemsQuantity }) => {
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
      <QuantityButton
        id={item.id}
        quantity={item.quantity}
        handleItemsQuantity={handleItemsQuantity}
      />
    </li>
  );
};

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const handleItemsQuantity = (val, id) => {
    const item = items.find((item) => item.id === id);

    if (item.quantity < 1 && val === -1) {
      return;
    } else {
      item.quantity += val;

      setItems([...items, item]);
    }
  };

  return (
    <>
      <div className="fixed z-30 top-0 left-0 bg-black-900/40 w-full h-full">
        x
      </div>
      <div className="fixed z-40 rounded-lg bg-white-900 w-[90dvw] top-28 left-1/2 -translate-x-1/2 p-8 grid gap-6">
        <div className="flex">
          <h6 className="flex-1">
            Cart (
            {cartItems.reduce((acc, val) => {
              acc += val.quantity;
              return acc;
            }, 0)}
            )
          </h6>
          <button className="text-black-900/50">
            <span>Remove All</span>
          </button>
        </div>
        <ul className="grid gap-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleItemsQuantity={handleItemsQuantity}
            />
          ))}
        </ul>
        <div className="flex items-center">
          <span className="flex-1 text-black-900/50">TOTAL</span>
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
    </>
  );
};

export default Cart;
