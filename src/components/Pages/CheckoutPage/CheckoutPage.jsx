/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../shared/Footer/Footer";
import { ShopContext } from "../../App";
import { Form } from "react-router-dom";
import { ButtonOrange } from "../../shared/Buttons";

const TextInput = ({ name, placeholder, format }) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Example validation: Check if the input follows a specific format, e.g., containing only letters
    const isValidInput = format.test(value);
    setIsValid(isValidInput);
  };

  return (
    <div className="relative">
      {!isValid && (
        <p className="absolute -top-5 right-0 text-red-500 font-bold text-[12px] text-right">
          Wrong format
        </p>
      )}
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={`w-full px-8 py-4 text-[14px] decoration-orange-900 font-bold rounded-lg focus:outline-none border-solid border-[1px] border-black-900/25 focus:border-orange-900 caret-orange-900 ${
          !isValid ? `border-red-500` : ``
        }`}
      />
    </div>
  );
};

const RadioInput = ({ name, placeholder, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="border-solid border-[1px] border-black-900/25 py-4 px-6 rounded-lg flex items-center gap-4 tablet:odd:col-start-2">
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        onChange={handleRadioChange}
        className="relative grid items-center justify-items-center appearance-none aspect-square w-[20px] rounded-full border-solid border-[1px] border-black-900/50 after:absolute after:content-[''] after:aspect-square after:w-[10px] after:rounded-full checked:after:bg-orange-900"
      />

      <label htmlFor={name} className="font-bold text-[14px]">
        {placeholder}
      </label>
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
      <div className="w-16 aspect-square bg-grey-800">
        <img src={item.image.mobile} alt="" className="rounded-lg " />
      </div>
      <div className="flex-1">
        <h6 className="leading-[25px]">{name}</h6>
        <span className="font-bold text-black-900/50 text-[14px] leading-[25px]">
          &#36; {item.price}
        </span>
      </div>
      <span className="text-black-900/50 font-bold">x{item.quantity}</span>
    </li>
  );
};

const Summary = () => {
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
      <ButtonOrange text={"Continue and pay"} />
    </div>
  );
};

const Checkout = () => {
  return (
    <div className="bg-grey-800">
      <div className="container-center p-4 mobile:p-8 desktop:px-0 grid gap-8 ">
        <Form className="grid gap-8 desktop:flex items-start">
          <div className="bg-white-900 grid gap-12 p-4 mobile:p-8 rounded-lg flex-1">
            <h2>Checkout</h2>

            <div className="grid gap-4">
              <legend>
                <h6 className="text-orange-900 text-[13px]">Billing details</h6>
              </legend>

              <div className="grid gap-6 tablet:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-bold text-[12px]">
                    Name
                  </label>
                  <TextInput
                    name={"name"}
                    placeholder={"Alexei Ward"}
                    format={/^[A-Za-z\s]+$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-bold text-[12px]">
                    Email Address
                  </label>
                  <TextInput
                    name={"email"}
                    placeholder={"alexei@mail.com"}
                    format={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="font-bold text-[12px]">
                    Phone Number
                  </label>
                  <TextInput
                    name={"phone"}
                    placeholder={"+1 202-555-0136"}
                    format={/^\+?[0-9\s\-]+$/}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <legend>
                <h6 className="text-orange-900 text-[13px]">Shipping info</h6>
              </legend>

              <div className="grid gap-6  tablet:grid-cols-2">
                <div className="grid gap-2 tablet:col-span-2">
                  <label htmlFor="address" className="font-bold text-[12px]">
                    Your Address
                  </label>
                  <TextInput
                    name={"address"}
                    placeholder={"1137 Williams Avenue"}
                    format={/^[A-Za-z0-9\s\-,]+$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="zipcode" className="font-bold text-[12px]">
                    ZIP Code
                  </label>
                  <TextInput
                    name={"zipcode"}
                    placeholder={"10001"}
                    format={/^\d{5}$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city" className="font-bold text-[12px]">
                    City
                  </label>
                  <TextInput
                    name={"city"}
                    placeholder={"New York"}
                    format={/^[A-Za-z\s]+$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="country" className="font-bold text-[12px]">
                    Country
                  </label>
                  <TextInput
                    name={"country"}
                    placeholder={"United States"}
                    format={/^[A-Za-z\s]+$/}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <legend>
                <h6 className="text-orange-900 text-[13px]">Payment details</h6>
              </legend>

              <div className="grid gap-6">
                <div className="grid gap-4 tablet:grid-cols-2">
                  <label
                    htmlFor="paymentmethod"
                    className="font-bold text-[12px]"
                  >
                    Payment Method
                  </label>
                  <RadioInput
                    name={"paymentmethod"}
                    placeholder={"e-Money"}
                    checked={true}
                  />
                  <RadioInput
                    name={"paymentmethod"}
                    placeholder={"Cash on Delivery"}
                  />
                </div>
              </div>

              <div className="grid gap-6 tablet:grid-cols-2">
                <div className="grid gap-2">
                  <label
                    htmlFor="emoneynumber"
                    className="font-bold text-[12px]"
                  >
                    e-Money Number
                  </label>
                  <TextInput
                    name={"emoneynumber"}
                    placeholder={"238521993"}
                    format={/^\d+$/}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="emoneypin" className="font-bold text-[12px]">
                    e-Money PIN
                  </label>
                  <TextInput
                    name={"emoneypin"}
                    placeholder={"6891"}
                    format={/^\d{4}$/}
                  />
                </div>
              </div>
            </div>
          </div>
          <Summary />
        </Form>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="mt-[90px]"></div>
      <Checkout />
      <Footer />
    </>
  );
};

export default CheckoutPage;
