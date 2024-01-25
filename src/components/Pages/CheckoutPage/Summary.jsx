import { useContext } from "react";
import { ShopContext } from "../../App";

import CartItem from "./CartItem";
import { ButtonOrange } from "../../shared/Buttons";

const Summary = ({ handleModalOpen }) => {
  const { cartItems } = useContext(ShopContext);

  const total = cartItems.reduce((acc, val) => {
    acc += val.quantity * val.price;
    return acc;
  }, 0);

  const shipping = 50;

  const vatInCents = cartItems.reduce((acc, val) => {
    const itemVat = val.quantity * val.price * 0.2 * 100; // Representing in cents
    return acc + Math.round(itemVat);
  }, 0);

  const vatInDollars = vatInCents / 100; // Convert back to dollars (or your currency)

  const grandTotal = total + shipping;

  return (
    <div className="bg-white-900 grid gap-6 p-8 rounded-lg desktop:w-[350px] desktop:sticky desktop:top-[122px]">
      <h5>Summary</h5>
      <ul className="grid gap-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex">
            <span className="flex-1 text-black-900/50">Total</span>
            <h6>&#36; {total}</h6>
          </div>
          <div className="flex">
            <span className="flex-1 text-black-900/50">Shipping</span>
            <h6>&#36; {shipping}</h6>
          </div>
          <div className="flex">
            <span className="flex-1 text-black-900/50">VAT (Included)</span>
            <h6>&#36; {vatInDollars}</h6>
          </div>
        </div>
        <div className="flex">
          <span className="flex-1 text-black-900/50">Grand Total</span>
          <h6 className="text-orange-900">&#36; {grandTotal}</h6>
        </div>
      </div>
      <ButtonOrange
        type={"submit"}
        text={"Continue and pay"}
        onClick={handleModalOpen}
      />
    </div>
  );
};

export default Summary;
