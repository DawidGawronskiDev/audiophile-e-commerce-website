/* eslint-disable react/prop-types */
import { useState } from "react";

import Header from "../../Header/Header";
import Footer from "../../shared/Footer/Footer";

import Checkout from "./Checkout";
import Modal from "./Modal";

const CheckoutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Header />
      <div className="mt-[90px]"></div>
      <Checkout modalOpen={modalOpen} handleModalOpen={handleModalOpen} />
      <Footer />
      <Modal modalOpen={modalOpen} />
    </>
  );
};

export default CheckoutPage;
