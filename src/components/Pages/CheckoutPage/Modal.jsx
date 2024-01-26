import { useContext } from "react";
import { ShopContext } from "../../App";

import ModalItem from "./ModalItem";
import { ButtonOrange } from "../../shared/Buttons";

const Modal = ({ modalOpen }) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className={`${modalOpen ? `block` : `hidden`}`}>
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 tablet:top-1/2 tablet:-translate-y-1/2 container-center w-full h-[calc(100dvh_-_90px)] tablet:grid tablet:items-center tablet:justify-items-center mt-[90px] tablet:mt-0">
        <div className="z-40 bg-white-900 p-4 tablet:p-12 rounded-lg grid gap-4 tablet:gap-8 my-8 tablet:w-[600px]">
          <img src={"/assets/checkout/icon-order-confirmation.svg"} alt="" />
          <h3>Thank You for your order</h3>
          <p className="body text-black-900/50">
            You will receive an email confirmation shortly.
          </p>
          <div className="rounded-lg overflow-hidden grid tablet:grid-cols-2">
            <div className="bg-grey-900 p-6 grid gap-2">
              <ul>
                <ModalItem item={cartItems[0]} />
              </ul>
              {cartItems.length > 1 && (
                <>
                  <div className="h-[1px] bg-black-900/25"></div>
                  <span className="text-black-900/50 text-center">
                    {cartItems.length === 2
                      ? `And 1 more item`
                      : `And ${cartItems.length - 1} more items`}
                  </span>
                </>
              )}
            </div>
            <div className="bg-black-900 p-6 tablet:flex tablet:flex-col tablet:justify-end">
              <span className="text-white-900/50 uppercase">Grand total</span>
              <h6 className="text-white-900">
                &#36;{" "}
                {cartItems.reduce((acc, val) => {
                  acc += val.quantity + val.price;
                  return acc;
                }, 50)}
              </h6>
            </div>
          </div>
          <ButtonOrange text={"Back to home"} link={"/"} />
        </div>
      </div>
      <div className="fixed z-40 top-0 left-0 bg-black-900/25 w-[100dvw] h-[100dvh]"></div>
    </div>
  );
};

export default Modal;
