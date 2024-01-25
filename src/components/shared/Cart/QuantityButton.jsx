import { useContext } from "react";
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

export default QuantityButton;
