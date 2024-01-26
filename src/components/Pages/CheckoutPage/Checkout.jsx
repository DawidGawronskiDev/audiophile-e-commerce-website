import { Form } from "react-router-dom";

import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Summary from "./Summary";

const Checkout = ({ handleModalOpen }) => {
  return (
    <div className="bg-grey-800">
      <div className="container-center p-4 mobile:p-8 desktop:px-0 grid gap-8 ">
        <Form className="grid gap-8 desktop:flex items-start">
          <div className="bg-white-900 grid gap-12 p-4 mobile:p-8 rounded-lg flex-1">
            <h3>Checkout</h3>

            <div className="grid gap-4">
              <legend>
                <span className="text-orange-900 sub-title font-bold">
                  Billing details
                </span>
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
                <span className="text-orange-900 sub-title font-bold">
                  Shipping info
                </span>
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
                <span className="text-orange-900 sub-title font-bold">
                  Payment details
                </span>
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
          <Summary handleModalOpen={handleModalOpen} />
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
