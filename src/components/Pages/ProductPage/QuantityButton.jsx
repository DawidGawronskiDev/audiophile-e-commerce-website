import { useContext } from "react";
import { ShopContext } from "../../App";

const QuantityButton = ({ quantity, product, handleQuantity }) => {
  const { handleAddItem } = useContext(ShopContext);

  return (
    <div className="flex gap-4">
      <div className="flex font-bold text-black-900/25 bg-grey-900 *:aspect-square *:w-10 *:flex *:items-center *:justify-center *:cursor-pointer">
        <div
          onClick={() => {
            handleQuantity(-1);
          }}
        >
          <span>-</span>
        </div>
        <div>
          <span className="text-black-900">{quantity}</span>
        </div>
        <div
          onClick={() => {
            handleQuantity(1);
          }}
        >
          <span>+</span>
        </div>
      </div>
      <button
        className="flex-1 mobile:px-8 uppercase bg-orange-900 hover:bg-orange-800 transition"
        onClick={() => {
          handleAddItem(product, quantity);
        }}
      >
        <span className="font-bold text-[13px] tracking-[1px] text-white-900">
          Add to cart
        </span>
      </button>
    </div>
  );
};

export default QuantityButton;
